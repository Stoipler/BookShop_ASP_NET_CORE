using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
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

        public override async Task<IEnumerable<PrintedEdition>> GetAsync()
        {
            IQueryable<PrintedEdition> printedEditions = _dbSet.Include(x => x.Authors);
            return await printedEditions.AsNoTracking().ToListAsync();
        }

        public async Task<IEnumerable<PrintedEdition>> GetSortedAsync(SearchParams searchParams)
        {
            IQueryable<PrintedEdition> printedEditions = _dbSet.Include(x => x.Authors);
            printedEditions = printedEditions.Where(p => (p.Price >= searchParams.PriceFrom && p.Price <= searchParams.PriceTo));
            if (searchParams.PrintedEditionType != 0)
            {
                printedEditions = printedEditions.Where(p => p.Type == searchParams.PrintedEditionType);
            }
            switch (searchParams.SortCriteria)
            {
                case SortCriteria.PriceAsc:
                    printedEditions = printedEditions.OrderBy(s => s.Price);
                    break;
                case SortCriteria.PriceDesc:
                    printedEditions = printedEditions.OrderByDescending(s => s.Price);
                    break;
                case SortCriteria.CurrencyAsc:
                    printedEditions = printedEditions.OrderBy(s => s.Currency);
                    break;
                case SortCriteria.CurrencyDesc:
                    printedEditions = printedEditions.OrderByDescending(s => s.Currency);
                    break;
                default:
                    printedEditions = printedEditions.OrderBy(s => s.Name);
                    break;
            }
            int count = await printedEditions.CountAsync();
            printedEditions = printedEditions.Skip((searchParams.Page - 1) * searchParams.PageSize).Take(searchParams.PageSize);
            return await printedEditions.AsNoTracking().ToListAsync();
        }
        public async Task<int> GetCollectionSizeAsync()
        {
            return await _dbSet.CountAsync();
        }

    }
}
