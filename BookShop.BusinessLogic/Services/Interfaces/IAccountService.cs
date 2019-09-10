using BookShop.BusinessLogic.Models.User;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IAccountService
    {
        Task<IdentityResult> SignUpAsync(UserSignUpModel userModel);
        Task<SignInResult> SignInAsync(UserSignInModel userModel);
        Task ConfirmEmailAsync(string userId, string code);
        Task<UserTransportModel> IsEmailConfirmedAsync(UserForgotPasswordModel model);
        Task<IdentityResult> ResetPasswordAsync(UserResetPasswordModel model);
        Task<UserForgotPasswordModel> ForgotPasswordAsync(UserForgotPasswordModel model);
    }
}
