using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class PrintedEditionRepository : BaseRepository<PrintedEdition>, IPrintedEditionRepository
    {
        public PrintedEditionRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<List<PrintedEdition>> GetRangeByIdAsync(List<int> printedEditionIds)
        {
            SqlBuilder sqlBuilder = new SqlBuilder();
            SqlBuilder.Template itemsExpression = sqlBuilder.AddTemplate($@"SELECT * FROM PrintedEditions
            WHERE PrintedEditions.Id IN @Ids");

            List<PrintedEdition> printedEditions = (await _connection.QueryAsync<PrintedEdition>(itemsExpression.RawSql, new { Ids = printedEditionIds })).ToList();

            return printedEditions;
        }

        public async Task<(List<PrintedEditionWithNestedObjects>, int)> GetWithNestedObjectsAsync(PrintedEditionRequestParameters parameters)
        {
            int skipCount = (parameters.Page - 1) * parameters.PageSize;
            int count = default(int);
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template countExpression = sqlBuilder.AddTemplate(
                $@"SELECT COUNT (DISTINCT PrintedEditions.Id) FROM PrintedEditions
                LEFT JOIN AuthorInBooks ON PrintedEditions.Id = AuthorInBooks.PrintedEditionId
                LEFT JOIN Authors ON Authors.Id = AuthorInBooks.AuthorId
                /**where**/");

            SqlBuilder.Template itemsExpression = sqlBuilder.AddTemplate(
                $@"SELECT * FROM (SELECT DISTINCT PrintedEditions.* FROM PrintedEditions
                LEFT JOIN AuthorInBooks ON PrintedEditions.Id = AuthorInBooks.PrintedEditionId
                LEFT JOIN Authors ON Authors.Id = AuthorInBooks.AuthorId
                /**where**/ /**orderby**/ ) AS FilteredPrintedEditions
                LEFT JOIN AuthorInBooks ON FilteredPrintedEditions.Id = AuthorInBooks.PrintedEditionId
                LEFT JOIN Authors ON Authors.Id = AuthorInBooks.AuthorId");

            sqlBuilder.Where("PrintedEditions.Price >= @PriceFrom AND PrintedEditions.Price <= @PriceTo");
            if (!string.IsNullOrWhiteSpace(parameters.KeyWord))
            {
                parameters.KeyWord = parameters.KeyWord.ToLower();
                sqlBuilder.Where($@"LOWER(PrintedEditions.Name + ' ' + PrintedEditions.Description) LIKE '%' + @KeyWord + '%'");
            }
            if (parameters.PrintedEditionType != PrintedEditionType.None)
            {
                sqlBuilder.Where("PrintedEditions.Type = @PrintedEditionType");
            }

            count = await _connection.ExecuteScalarAsync<int>(countExpression.RawSql, parameters);

            if (parameters.SortCriteria == SortCriteria.PriceAsc)
            {
                sqlBuilder.OrderBy($"PrintedEditions.Price ASC OFFSET @Skip ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.PriceDesc)
            {
                sqlBuilder.OrderBy($"PrintedEditions.Price DESC OFFSET @Skip ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.CurrencyAsc)
            {
                sqlBuilder.OrderBy($"PrintedEditions.Currency ASC OFFSET @Skip ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.CurrencyDesc)
            {
                sqlBuilder.OrderBy($"PrintedEditions.Price DESC OFFSET @Skip ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.None)
            {
                sqlBuilder.OrderBy($"PrintedEditions.Id OFFSET @Skip ROWS FETCH NEXT @PageSize ROWS ONLY");
            }


            Dictionary<int, PrintedEditionWithNestedObjects> printedEditionWithNestedObjectsDictionary = new Dictionary<int, PrintedEditionWithNestedObjects>();
            IEnumerable<PrintedEditionWithNestedObjects> response = await _connection.QueryAsync<PrintedEdition, AuthorInBook, Author, PrintedEditionWithNestedObjects>(itemsExpression.RawSql,
                (printedEdition, authorInBook, author) =>
                {
                    bool isExsist = printedEditionWithNestedObjectsDictionary.TryGetValue(printedEdition.Id, out PrintedEditionWithNestedObjects printedEditionWithNestedObjects);

                    if (!isExsist)
                    {
                        printedEditionWithNestedObjects = new PrintedEditionWithNestedObjects();
                        printedEditionWithNestedObjects.PrintedEdition = printedEdition;
                        printedEditionWithNestedObjectsDictionary.Add(printedEdition.Id, printedEditionWithNestedObjects);
                    }
                    if (!(authorInBook is null))
                    {
                        authorInBook.Author = author;
                        printedEditionWithNestedObjects.AuthorInBooks.Add(authorInBook);
                    }
                    return printedEditionWithNestedObjects;
                },
                parameters);
            List<PrintedEditionWithNestedObjects> result = response.Distinct().ToList();

            return (result, count);
        }

        public async Task<PrintedEditionWithNestedObjects> GetWithNestedObjectsByIdAsync(int id)
        {
            SqlBuilder sqlBuilder = new SqlBuilder();
            SqlBuilder.Template itemsExpression = sqlBuilder.AddTemplate(
                $@"SELECT * FROM (SELECT DISTINCT PrintedEditions.* FROM PrintedEditions
                LEFT JOIN AuthorInBooks ON PrintedEditions.Id = AuthorInBooks.PrintedEditionId
                LEFT JOIN Authors ON Authors.Id = AuthorInBooks.AuthorId
                WHERE PrintedEditions.Id = @Id ) AS FilteredPrintedEditions
                LEFT JOIN AuthorInBooks ON FilteredPrintedEditions.Id = AuthorInBooks.PrintedEditionId
                LEFT JOIN Authors ON Authors.Id = AuthorInBooks.AuthorId");

            Dictionary<int, PrintedEditionWithNestedObjects> printedEditionWithNestedObjectsDictionary = new Dictionary<int, PrintedEditionWithNestedObjects>();

            IEnumerable<PrintedEditionWithNestedObjects> response = await _connection.QueryAsync<PrintedEdition, AuthorInBook, Author, PrintedEditionWithNestedObjects>(itemsExpression.RawSql,
                (printedEdition, authorInBook, author) =>
                {
                    bool isExsist = printedEditionWithNestedObjectsDictionary.TryGetValue(printedEdition.Id, out PrintedEditionWithNestedObjects printedEditionWithNestedObjects);

                    if (!isExsist)
                    {
                        printedEditionWithNestedObjects = new PrintedEditionWithNestedObjects();
                        printedEditionWithNestedObjects.PrintedEdition = printedEdition;
                        printedEditionWithNestedObjectsDictionary.Add(printedEdition.Id, printedEditionWithNestedObjects);
                    }
                    if (!(authorInBook is null))
                    {
                        authorInBook.Author = author;
                        printedEditionWithNestedObjects.AuthorInBooks.Add(authorInBook);
                    }
                    return printedEditionWithNestedObjects;

                }, new { Id = id });

            PrintedEditionWithNestedObjects result = response.Distinct().FirstOrDefault();

            return result;
        }
    }
}
