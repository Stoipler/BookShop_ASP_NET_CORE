using BookShop.BusinessLogic.Models.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IUserService
    {
        IEnumerable<UserModel> GetAll();
        Task SignUp(SignUpUserModel userModel);
    }
}
