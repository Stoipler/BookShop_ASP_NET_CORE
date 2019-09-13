using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
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

        public async Task<IEnumerable<PrintedEdition>> GetSortedAsync(SortCriteria sortCriteria , PrintedEditionType printedEditionType,decimal priceFrom,decimal priceTo)
        {
            IQueryable<PrintedEdition> printedEditions = _dbSet.Include(x => x.Authors);
            printedEditions = printedEditions.Where(p => (p.Price >= priceFrom && p.Price <= priceTo));
            if (printedEditionType != 0)
            {
                printedEditions = printedEditions.Where(p => p.Type == printedEditionType);
            }
            switch (sortCriteria)
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
            return await printedEditions.AsNoTracking().ToListAsync();
        }
    }
}
