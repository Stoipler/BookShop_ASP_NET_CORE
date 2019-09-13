using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using System.Collections.Generic;
using System.Threading.Tasks;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IPrintedEditionRepository : IGenericRepository<PrintedEdition>
    {
        Task<IEnumerable<PrintedEdition>> GetSortedAsync(SortCriteria sortCriteria, 
            PrintedEditionType printedEditionType, decimal priceFrom, decimal priceTo);
    }
}
