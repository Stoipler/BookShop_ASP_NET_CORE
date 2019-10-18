using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Dapper;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<Order>, int)> GetByParmeters(OrderRequestParameters parameters)
        {
            int skipCount = (parameters.Page - 1) * parameters.PageSize;
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template countExpression = sqlBuilder.AddTemplate(
                $@"SELECT COUNT (DISTINCT Orders.Id) FROM Orders
                LEFT JOIN AspNetUsers ON Orders.ApplicationUserId = AspNetUsers.Id
                /**where**/");

            SqlBuilder.Template itemsExpression = sqlBuilder.AddTemplate(
                $@"SELECT * FROM 
                (SELECT DISTINCT Orders.* FROM Orders
                LEFT JOIN AspNetUsers ON Orders.ApplicationUserId = AspNetUsers.Id
                /**where**/ /**orderby**/) AS FilteredOrders
                LEFT JOIN AspNetUsers ON FilteredOrders.ApplicationUserId = AspNetUsers.Id
                WHERE FilteredOrders.ApplicationUserId NOT IN (SELECT AspNetUsers.Id FROM AspNetUsers
                WHERE AspNetUsers.IsRemoved = 1)");

            if (!string.IsNullOrWhiteSpace(parameters.KeyWord))
            {
                parameters.KeyWord = parameters.KeyWord.ToLower();
                sqlBuilder.Where($@"LOWER(AspNetUsers.FirstName + ' ' + AspNetUsers.FirstName + ' ' + AspNetUsers.UserName ) LIKE '%' + @KeyWord + '%'");
            }

            int count = await _connection.ExecuteScalarAsync<int>(countExpression.RawSql, parameters);

            sqlBuilder.OrderBy($"Orders.Id OFFSET @Skip ROWS FETCH NEXT @PageSize ROWS ONLY");

            List<Order> result = await _connection.QueryAsync<Order, ApplicationUser, Order>(itemsExpression.RawSql,
                (order, applicationUser) =>
                {
                    order.ApplicationUser = applicationUser;
                    return order;
                },
                parameters) as List<Order>;

            return (result, count);
        }

        public async Task<List<Order>> GetRangeByUserId(int id)
        {
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template sqlExpression = sqlBuilder.AddTemplate(
                $@"SELECT * FROM 
                (SELECT DISTINCT Orders.* FROM Orders
                LEFT JOIN AspNetUsers ON Orders.ApplicationUserId = AspNetUsers.Id
                WHERE AspNetUsers.Id = @Id) AS FilteredOrders
                LEFT JOIN AspNetUsers ON FilteredOrders.ApplicationUserId = AspNetUsers.Id");

            List<Order> result = await _connection.QueryAsync<Order, ApplicationUser, Order>(sqlExpression.RawSql,
                (order, applicationUser) =>
                {
                    order.ApplicationUser = applicationUser;
                    return order;
                },
                new { Id = id }) as List<Order>;

            return result;
        }
    }
}
