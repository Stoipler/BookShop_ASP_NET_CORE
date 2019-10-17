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
                sqlBuilder.OrderBy("PrintedEditions.Price ASC OFFSET((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.PriceDesc)
            {
                sqlBuilder.OrderBy("PrintedEditions.Price DESC OFFSET((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.CurrencyAsc)
            {
                sqlBuilder.OrderBy("PrintedEditions.Currency ASC OFFSET((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.CurrencyDesc)
            {
                sqlBuilder.OrderBy("PrintedEditions.Price DESC OFFSET((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");
            }
            if (parameters.SortCriteria == SortCriteria.None)
            {
                sqlBuilder.OrderBy("PrintedEditions.Id OFFSET((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");
            }

            List<PrintedEditionWithNestedObjects> result = new List<PrintedEditionWithNestedObjects>();
            await _connection.QueryAsync<PrintedEdition, AuthorInBook, Author, PrintedEdition>(itemsExpression.RawSql,
                (printedEdition, authorInBook, author) =>
                {
                    PrintedEditionWithNestedObjects printedEditionWithNestedObjects = result.FirstOrDefault(item => item.PrintedEdition.Id == printedEdition.Id);

                    if (printedEditionWithNestedObjects is null)
                    {
                        printedEditionWithNestedObjects = new PrintedEditionWithNestedObjects();
                        printedEditionWithNestedObjects.PrintedEdition = printedEdition;
                        result.Add(printedEditionWithNestedObjects);
                    }

                    if (!(authorInBook is null))
                    {
                        authorInBook.Author = author;
                        printedEditionWithNestedObjects.AuthorInBooks.Add(authorInBook);
                    }

                    return printedEdition;
                }, parameters);

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

            PrintedEditionWithNestedObjects printedEditionWithNestedObjects = new PrintedEditionWithNestedObjects();
            await _connection.QueryAsync<PrintedEdition, AuthorInBook, Author, PrintedEdition>(itemsExpression.RawSql,
                (printedEdition, authorInBook, author) =>
                {
                    printedEditionWithNestedObjects = new PrintedEditionWithNestedObjects();
                    printedEditionWithNestedObjects.PrintedEdition = printedEdition;

                    if (!(authorInBook is null))
                    {
                        authorInBook.Author = author;
                        printedEditionWithNestedObjects.AuthorInBooks.Add(authorInBook);
                    }

                    return printedEdition;
                }, new { Id = id });

            return printedEditionWithNestedObjects;
        }
    }
}
