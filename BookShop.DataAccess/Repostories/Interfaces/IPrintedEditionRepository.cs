using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IPrintedEditionRepository : IGenericRepository<PrintedEdition>
    {
        Task<IEnumerable<PrintedEdition>> GetSortedAsync(SearchParams searchParams);
        Task<int> GetCollectionSizeAsync();
    }
}
