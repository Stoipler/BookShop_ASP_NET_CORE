using BookShop.BusinessLogic.Models.Account;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IAccountService
    {
        Task<SignUpResponseModel> SignUpAsync(SignUpRequestModel userModel);
        Task<SignInResponseModel> SignInAsync(SignInRequestModel userModel);
        Task ConfirmEmailAsync(string userId, string code);
        Task<IdentityResult> ResetPasswordAsync(ResetPasswordRequestModel model);
        Task<ForgotPasswordResponseModel> ForgotPasswordAsync(ForgotPasswordRequestModel model);
    }
}
