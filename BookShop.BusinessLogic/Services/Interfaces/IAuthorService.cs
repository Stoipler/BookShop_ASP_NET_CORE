using BookShop.BusinessLogic.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IAuthorService
    {
        Task<IEnumerable<AuthorModel>> GetAsync(AuthorSearchParams searchParams);
        Task CreateAsync(AuthorModel model);
        Task Update(AuthorModel model);
        Task Remove(int id);
        Task<AuthorModel> GetByIdAsync(int id);
    }
}
