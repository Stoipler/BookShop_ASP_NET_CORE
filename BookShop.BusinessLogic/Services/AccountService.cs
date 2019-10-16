using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Models.AccountModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<SignInResponseModel> SignInAsync(SignInRequestModel requestModel)
        {
            SignInResponseModel responseModel = new SignInResponseModel();
            responseModel.SignInResult = await _signInManager.PasswordSignInAsync(requestModel.Email, requestModel.Password, false, false);

            if (!responseModel.SignInResult.Succeeded)
            {
                return responseModel;
            }

            ApplicationUser user = await _userManager.FindByEmailAsync(requestModel.Email);
            string userRole = (await _userManager.GetRolesAsync(user)).FirstOrDefault();
            responseModel.Token = _jwtHelper.GenerateAccessToken(user, userRole);

            return responseModel;
        }

        public async Task<SignUpResponseModel> SignUpAsync(SignUpRequestModel requestModel)
        {
            ApplicationUser user = requestModel.MapToEntity(new ApplicationUser());
            SignUpResponseModel responseModel = new SignUpResponseModel();
            responseModel.IdentityResult = await _userManager.CreateAsync(user, requestModel.Password);

            if (responseModel.IdentityResult.Succeeded)
            {
                responseModel.Id = user.Id;
                responseModel.SignUpToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                return responseModel;
            }

            return responseModel;
        }

        public async Task ConfirmEmailAsync(string userId, string code)
        {
            ApplicationUser user = await _userManager.FindByIdAsync(userId);
            await _userManager.ConfirmEmailAsync(user, code);
        }

        public async Task<ForgotPasswordResponseModel> ForgotPasswordAsync(ForgotPasswordRequestModel requestModel)
        {
            ApplicationUser user = await _userManager.FindByEmailAsync(requestModel.Email);
            ForgotPasswordResponseModel responseModel = new ForgotPasswordResponseModel();

            bool isEmailConfirmed = await _userManager.IsEmailConfirmedAsync(user);
            if (user is null || !isEmailConfirmed)
            {
                responseModel.IsPossibleToUseCurrentEmail = false;
                return responseModel;
            }

            responseModel.Id = user.Id;
            responseModel.IsPossibleToUseCurrentEmail = true;
            string code = await _userManager.GeneratePasswordResetTokenAsync(user);
            responseModel.Code = Base64UrlEncoder.Encode(code);

            return responseModel;
        }

        public async Task<IdentityResult> ResetPasswordAsync(ResetPasswordRequestModel requestModel)
        {
            ApplicationUser user = await _userManager.FindByNameAsync(requestModel.Email);

            if (user is null)
            {
                return null;
            }

            string code = Base64UrlEncoder.Decode(requestModel.Code);
            IdentityResult result = await _userManager.ResetPasswordAsync(user, code, requestModel.Password);

            return result;
        }
    }
}
