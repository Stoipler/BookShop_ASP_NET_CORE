using BookShop.BusinessLogic.AuthorModels;
using BookShop.BusinessLogic.Models.AuthorModels;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IAuthorService
    {
        Task<AuthorResponseModel> GetAsync(AuthorRequestModel searchParams);
        Task CreateAsync(AuthorModel model);
        Task Update(AuthorModel model);
        Task Remove(int id);
        Task<AuthorModel> GetByIdAsync(int id);
    }
}
