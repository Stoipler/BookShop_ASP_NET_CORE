using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Dapper;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<AuthorWithNestedObjects>, int)> GetWithParamsAsync(AuthorRequestParameters parameters)
        {
            int count = default(int);
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template countExpression = sqlBuilder.AddTemplate(
                $@"SELECT COUNT (DISTINCT Authors.Id) FROM Authors
                LEFT JOIN AuthorInBooks ON Authors.Id = AuthorInBooks.AuthorId
                LEFT JOIN PrintedEditions ON PrintedEditions.Id = AuthorInBooks.PrintedEditionId
                /**where**/");

            SqlBuilder.Template itemsExpression = sqlBuilder.AddTemplate($@"SELECT * FROM 
                (SELECT DISTINCT Authors.* FROM Authors
                LEFT JOIN AuthorInBooks ON Authors.Id = AuthorInBooks.AuthorId
                LEFT JOIN PrintedEditions ON PrintedEditions.Id = AuthorInBooks.PrintedEditionId
                /**where**/ /**orderby**/) AS FilteredAuthors
                LEFT JOIN AuthorInBooks ON FilteredAuthors.Id = AuthorInBooks.AuthorId
                LEFT JOIN PrintedEditions ON PrintedEditions.Id = AuthorInBooks.PrintedEditionId");

            if (!string.IsNullOrWhiteSpace(parameters.Name))
            {
                parameters.Name = parameters.Name.ToLower();
                sqlBuilder.Where($@"LOWER(Authors.Name) LIKE '%' + @Name + '%'");
            }
            if (parameters.IgnoreAuthorsList.Any())
            {
                sqlBuilder.Where($"Authors.Id NOT IN @IgnoreAuthorsList");
            }

            count = await _connection.ExecuteScalarAsync<int>(countExpression.RawSql, parameters);

            if (parameters.WithPagination)
            {
                sqlBuilder.OrderBy("Authors.Name OFFSET ((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");
            }

            Dictionary<int, AuthorWithNestedObjects> authorWithNestedObjectsDictionary = new Dictionary<int, AuthorWithNestedObjects>();
            List<AuthorWithNestedObjects> result = await _connection.QueryAsync<Author, AuthorInBook, PrintedEdition, AuthorWithNestedObjects>(itemsExpression.RawSql,
                (author, authorInBook, printedEdition) =>
                {
                    bool isExist = authorWithNestedObjectsDictionary.TryGetValue(author.Id, out AuthorWithNestedObjects authorWithNestedObjects);

                    if (!isExist)
                    {
                        authorWithNestedObjects = new AuthorWithNestedObjects();
                        authorWithNestedObjects.Author = author;
                        authorWithNestedObjectsDictionary.Add(author.Id, authorWithNestedObjects);
                    }

                    if (!(authorInBook is null))
                    {
                        authorInBook.PrintedEdition = printedEdition;
                        authorWithNestedObjects.AuthorInBooks.Add(authorInBook);
                    }

                    return authorWithNestedObjects;
                }, parameters) as List<AuthorWithNestedObjects>;

            return (result, count);
        }
    }
}
