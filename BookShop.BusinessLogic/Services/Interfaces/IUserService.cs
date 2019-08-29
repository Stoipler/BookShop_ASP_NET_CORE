using BookShop.BusinessLogic.Models.User;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IUserService
    {
        Task<IdentityResult> SignUpAsync(SignUpUserModel userModel);
        Task<SignInResult> SignInAsync(SignInUserModel userModel);
    }
}
