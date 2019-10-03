using BookShop.BusinessLogic.Models.Account;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IUserService
    {

        Task<UserModel> GetByIdAsync(int id);
        Task UpdateAsync(UserModel model);
    }
}
