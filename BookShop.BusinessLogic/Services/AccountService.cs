using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using System.Web;

namespace BookShop.BusinessLogic.Services
{
    public class AccountService : IAccountService
    {
        private readonly IUserRepository _userRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly JwtHelper _jwtHelper;

        public AccountService(IUserRepository userRepository, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, JwtHelper jwtHelper)
        {
            _userRepository = userRepository;
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtHelper = jwtHelper;
        }
        public async Task<IdentityResult> SignUpAsync(UserSignUpModel userModel)
        {
            var user = new ApplicationUser
            {
                UserName = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Email = userModel.Email
            };
            var result = await _userManager.CreateAsync(user, userModel.Password);
            userModel.Id = user.Id;
            userModel.SignUpToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            return result;
        }
        public async Task<SignInResult> SignInAsync(UserSignInModel userModel)
        {
            SignInResult result = await _signInManager.PasswordSignInAsync(userModel.Email, userModel.Password, false, false);
            if (!result.Succeeded)
            {
                return result;
            }
            ApplicationUser user = await _userManager.FindByEmailAsync(userModel.Email);
            userModel.Password = null;
            userModel.Token = _jwtHelper.GenerateAccessToken(user);
            return result;
        }
        public async Task ConfirmEmailAsync(string userId, string code)
        {
            ApplicationUser user = await _userManager.FindByIdAsync(userId);
            await _userManager.ConfirmEmailAsync(user, code);
        }
        public async Task<UserTransportModel> IsEmailConfirmedAsync(UserForgotPasswordModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);

            await _userManager.IsEmailConfirmedAsync(user);

            var userModel = new UserTransportModel { Id = user.Id };
            userModel.Code = await _userManager.GeneratePasswordResetTokenAsync(user);

            return userModel;
        }
        public async Task<UserForgotPasswordModel> ForgotPasswordAsync(UserForgotPasswordModel model)
        {
            ApplicationUser user = await _userManager.FindByEmailAsync(model.Email);
            if(user== null|| !(await _userManager.IsEmailConfirmedAsync(user)))
            {
                model.IsPossibleToUseCurrentEmail = false;
                return model;
            }
            model.Id = user.Id;
            model.IsPossibleToUseCurrentEmail = true;
            string code = await _userManager.GeneratePasswordResetTokenAsync(user);
            model.Code = Base64UrlEncoder.Encode(code);
            return model;
        }
        public async Task<IdentityResult> ResetPasswordAsync(UserResetPasswordModel model)
        {
            ApplicationUser user = await _userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                return null;
            }
            string code = Base64UrlEncoder.Decode(model.Code);
            var result=await _userManager.ResetPasswordAsync(user,code , model.Password);
            return result;
        }
    }
}
