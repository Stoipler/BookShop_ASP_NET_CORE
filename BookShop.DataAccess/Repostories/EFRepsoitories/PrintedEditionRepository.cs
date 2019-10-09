using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class PrintedEditionRepository : BaseRepository<PrintedEdition>, IPrintedEditionRepository
    {

        public PrintedEditionRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<PrintedEditionWithNestedObjects> GetWithNestedObjectsByIdAsync(int id)
        {
            PrintedEditionWithNestedObjects printedEdition = await _dbSet.Where(p => (p.Id == id)).GroupJoin(_context.AuthorInBooks.Include(item => item.Author),
               outerKeySelector => outerKeySelector.Id,
               innerKeySelector => innerKeySelector.PrintedEditionId,
               (product, authorInBooks) => new PrintedEditionWithNestedObjects
               {
                   PrintedEdition = product,
                   AuthorInBooks = authorInBooks.ToList()
               }).FirstAsync();
            return printedEdition;
        }
        public async Task<(List<PrintedEditionWithNestedObjects>, int)> GetWithNestedObjectsAsync(PrintedEditionRequestParameters requestParameters)
        {
            IQueryable<PrintedEditionWithNestedObjects> printedEditions = _dbSet.GroupJoin(_context.AuthorInBooks.Include(item => item.Author),
               outerKeySelector => outerKeySelector.Id,
               innerKeySelector => innerKeySelector.PrintedEditionId,
               (printedEdition, authorInBooks) => new PrintedEditionWithNestedObjects
               {
                   PrintedEdition = printedEdition,
                   AuthorInBooks = authorInBooks.ToList()
               });

            printedEditions = printedEditions.Where(item => (item.PrintedEdition.Price >= requestParameters.PriceFrom && item.PrintedEdition.Price <= requestParameters.PriceTo));

            if (!string.IsNullOrWhiteSpace(requestParameters.KeyWord))
            {
                printedEditions = printedEditions.Where(item => (item.PrintedEdition.Name.Contains(requestParameters.KeyWord) || item.PrintedEdition.Description.Contains(requestParameters.KeyWord)));
            }
            if (requestParameters.PrintedEditionType != 0)
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
            int countToSkip = (--requestParameters.Page) * requestParameters.PageSize;
            printedEditions = printedEditions.Skip(countToSkip).Take(requestParameters.PageSize);
            List<PrintedEditionWithNestedObjects> result = await printedEditions.AsNoTracking().ToListAsync();
            return (result, count);
        }
        public async Task<List<PrintedEdition>> GetRangeByIdAsync(List<int> printedEditionIds)
        {
            return await _dbSet.Where(p => printedEditionIds.Contains(p.Id)).ToListAsync();
        }
    }
}
