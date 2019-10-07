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
        public async Task<(List<PrintedEditionWithNestedObjects>, int)> GetWithNestedObjectsAsync(PrintedEditionSearchParams searchParams)
        {
            IQueryable<PrintedEditionWithNestedObjects> printedEditions = _dbSet.GroupJoin(_context.AuthorInBooks.Include(item => item.Author),
               outerKeySelector => outerKeySelector.Id,
               innerKeySelector => innerKeySelector.PrintedEditionId,
               (printedEdition, authorInBooks) => new PrintedEditionWithNestedObjects
               {
                   PrintedEdition = printedEdition,
                   AuthorInBooks = authorInBooks.ToList()
               });
            printedEditions = printedEditions.Where(item => (item.PrintedEdition.Price >= searchParams.PriceFrom && item.PrintedEdition.Price <= searchParams.PriceTo));

            if (!string.IsNullOrWhiteSpace(searchParams.KeyWord))
            {
                printedEditions = printedEditions.Where(item => (item.PrintedEdition.Name.Contains(searchParams.KeyWord) || item.PrintedEdition.Description.Contains(searchParams.KeyWord)));
            }
            if (searchParams.PrintedEditionType != 0)
            {
                printedEditions = printedEditions.Where(item => item.PrintedEdition.Type == searchParams.PrintedEditionType);
            }

            if (searchParams.SortCriteria == SortCriteria.PriceAsc)
            {
                printedEditions = printedEditions.OrderBy(item => item.PrintedEdition.Price);
            }
            if (searchParams.SortCriteria == SortCriteria.PriceDesc)
            {
                printedEditions = printedEditions.OrderByDescending(item => item.PrintedEdition.Price);
            }
            if (searchParams.SortCriteria == SortCriteria.CurrencyAsc)
            {
                printedEditions = printedEditions.OrderBy(item => item.PrintedEdition.Currency);
            }
            if (searchParams.SortCriteria == SortCriteria.CurrencyDesc)
            {
                printedEditions = printedEditions.OrderByDescending(item => item.PrintedEdition.Currency);
            }
            if (searchParams.SortCriteria == SortCriteria.None)
            {
                printedEditions = printedEditions.OrderByDescending(item => item.PrintedEdition.CreationDate);
            }

            int count = await printedEditions.CountAsync();
            int countToSkip = (--searchParams.Page) * searchParams.PageSize;
            printedEditions = printedEditions.Skip(countToSkip).Take(searchParams.PageSize);
            List<PrintedEditionWithNestedObjects> result = await printedEditions.AsNoTracking().ToListAsync();
            return (result, count);
        }
        public async Task<List<PrintedEdition>> GetRangeByIdAsync(List<int> printedEditionIds)
        {
            return await _dbSet.Where(p => printedEditionIds.Contains(p.Id)).ToListAsync();
        }
    }
}
