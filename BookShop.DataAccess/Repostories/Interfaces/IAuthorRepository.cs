using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IAuthorRepository : IGenericRepository<Author>
    {
        Task<(List<AuthorWithNestedObjects>, int)> GetWithParamsAsync(AuthorSearchParams authorSearchParams);
    }
}
