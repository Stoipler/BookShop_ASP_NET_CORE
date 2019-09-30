using System.Collections.Generic;
using System.Threading.Tasks;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
using BookShop.DataAccess.Repostories.Interfaces.Base;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IAuthorRepository : IGenericRepository<Author>
    {
        Task<IEnumerable<Author>> GetWithParamsAsync(AuthorSearchParams authorSearchParams);
        Task<int> GetCount(AuthorSearchParams authorSearchParams);
    }
}
