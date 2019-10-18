using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class UserRepository : BaseRepository<ApplicationUser>, IUserRepository
    {
        public UserRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<ApplicationUser> users, int count)> GetUsersAsync(UserRequestParameters parameters)
        {
            int count = default(int);
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template countExpression = sqlBuilder.AddTemplate(
                $@"SELECT COUNT (DISTINCT AspNetUsers.Id) FROM AspNetUsers
                /**where**/");

            SqlBuilder.Template itemsExpression = sqlBuilder.AddTemplate(
                $@"SELECT * FROM 
                (SELECT DISTINCT AspNetUsers.* FROM AspNetUsers
                /**where**/ /**orderby**/) AS FilteredUsers");

            sqlBuilder.Where("AspNetUsers.UserName != 'admin@email.com'");
            if (!string.IsNullOrWhiteSpace(parameters.KeyWord))
            {
                parameters.KeyWord = parameters.KeyWord.ToLower();
                sqlBuilder.Where($@"LOWER(AspNetUsers.FirstName + ' ' + AspNetUsers.LastName + ' ' + AspNetUsers.UserName + ' ' + AspNetUsers.Email) LIKE '%' + @KeyWord + '%'");
            }

            count = await _connection.ExecuteScalarAsync<int>(countExpression.RawSql, parameters);

            sqlBuilder.OrderBy("AspNetUsers.CreationDate DESC OFFSET ((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");
            List<ApplicationUser> response = (await _connection.QueryAsync<ApplicationUser>(itemsExpression.RawSql, parameters)).ToList();

            return (response, count);
        }
    }
}
