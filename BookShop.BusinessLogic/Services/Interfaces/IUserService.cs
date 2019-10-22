using BookShop.BusinessLogic.Models.UserModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IUserService
    {

        Task<UserResponseModel> GetUsersAsync(UserRequestModel requestModel);
        Task UpdateUserAsync(UserModel requestModel);
        Task<UserProfileResponseModel> GetUserProfileAsync();
        Task UpdateUserProfileAsync(UserProfileRequestModel requestModel);
        Task<IdentityResult> ChangeUserPasswordAsync(PasswordChangeRequestModel requestModel);
    }
}
