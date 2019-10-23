using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class PrintedEditionRepository : BaseRepository<PrintedEdition>, IPrintedEditionRepository
    {

        public PrintedEditionRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<PrintedEditionWithNestedObjects> GetWithNestedObjectsByIdAsync(int id)
        {
            PrintedEditionWithNestedObjects printedEdition = await _dbSet.Include(item => item.Discount).Where(item => (item.Id == id)).GroupJoin(_context.AuthorInBooks.Include(authorInBook => authorInBook.Author),
               outerKeySelector => outerKeySelector.Id,
               innerKeySelector => innerKeySelector.PrintedEditionId,
               (product, authorInBooks) => new PrintedEditionWithNestedObjects
               {
                   PrintedEdition = product,
                   AuthorInBooks = authorInBooks.ToList()
               }).FirstOrDefaultAsync();

            return printedEdition;
        }
        public async Task<(List<PrintedEditionWithNestedObjects>, int)> GetWithNestedObjectsAsync(PrintedEditionRequestParameters requestParameters)
        {
            IQueryable<PrintedEditionWithNestedObjects> printedEditions = _dbSet.Include(item => item.Discount).GroupJoin(_context.AuthorInBooks.Include(item => item.Author),
               outerKeySelector => outerKeySelector.Id,
               innerKeySelector => innerKeySelector.PrintedEditionId,
               (printedEdition, authorInBooks) => new PrintedEditionWithNestedObjects
               {
                   PrintedEdition = printedEdition,
                   AuthorInBooks = authorInBooks.ToList()
               });

            bool condition = !(requestParameters.PrintedEditionIgnoreList is null) && requestParameters.PrintedEditionIgnoreList.Any();
            if (condition)
            {
                printedEditions = printedEditions.Where(item => !requestParameters.PrintedEditionIgnoreList.Contains(item.PrintedEdition.Id));
            }

            printedEditions = printedEditions.Where(item => (item.PrintedEdition.Price >= requestParameters.PriceFrom && item.PrintedEdition.Price <= requestParameters.PriceTo));

            if (!string.IsNullOrWhiteSpace(requestParameters.KeyWord))
            {
                printedEditions = printedEditions.Where(item => (item.PrintedEdition.Name.Contains(requestParameters.KeyWord) || item.PrintedEdition.Description.Contains(requestParameters.KeyWord)));
            }

            if (requestParameters.PrintedEditionType != PrintedEditionType.None)
            {
                printedEditions = printedEditions.Where(item => item.PrintedEdition.Type == requestParameters.PrintedEditionType);
            }

            if (requestParameters.SortCriteria == SortCriteria.PriceAsc)
            {
                printedEditions = printedEditions.OrderBy(item => item.PrintedEdition.Price);
            }
            if (requestParameters.SortCriteria == SortCriteria.PriceDesc)
            {
                printedEditions = printedEditions.OrderByDescending(item => item.PrintedEdition.Price);
            }
            if (requestParameters.SortCriteria == SortCriteria.CurrencyAsc)
            {
                printedEditions = printedEditions.OrderBy(item => item.PrintedEdition.Currency);
            }
            if (requestParameters.SortCriteria == SortCriteria.CurrencyDesc)
            {
                printedEditions = printedEditions.OrderByDescending(item => item.PrintedEdition.Currency);
            }
            if (requestParameters.SortCriteria == SortCriteria.None)
            {
                printedEditions = printedEditions.OrderByDescending(item => item.PrintedEdition.CreationDate);
            }

            int count = await printedEditions.CountAsync();

            if (requestParameters.WithPagination)
            {
                int countToSkip = (--requestParameters.Page) * requestParameters.PageSize;

                printedEditions = printedEditions.Skip(countToSkip).Take(requestParameters.PageSize);
            }

            List<PrintedEditionWithNestedObjects> result = await printedEditions.AsNoTracking().ToListAsync();

            return (result, count);
        }
        public async Task<List<PrintedEdition>> GetRangeByIdAsync(List<int> printedEditionIds)
        {
            List<PrintedEdition> printedEditions = await _dbSet.Include(item => item.Discount).Where(item => printedEditionIds.Contains(item.Id)).ToListAsync();

            return printedEditions;
        }
    }
}
