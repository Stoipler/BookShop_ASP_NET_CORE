using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class AccountService : IAccountService
    {
        private readonly IUserRepository _userRepository;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountService(IUserRepository userRepository, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userRepository = userRepository;
            _userManager = userManager;
            _signInManager = signInManager;
        }
        public async Task<IdentityResult> SignUpAsync(UserSignUpModel userModel)
        {
            var user = new User
            {
                UserName = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Email = userModel.Email
            };
            var result= await _userManager.CreateAsync(user,userModel.Password);
            userModel.Id= user.Id;
            userModel.SignUpToken= await _userManager.GenerateEmailConfirmationTokenAsync(user);
            return result;
        }
        public async Task<SignInResult> SignInAsync(UserSignInModel userModel)
        {
            return await _signInManager.PasswordSignInAsync(userModel.Email,userModel.Password,false,false); 
        }
        public async Task ConfirmEmailAsync(string userId, string code)
        {
            var user=await _userManager.FindByIdAsync(userId);
            await _userManager.ConfirmEmailAsync(user, code);
        }
        public async Task<UserTransportModel> IsEmailConfirmedAsync(UserForgotPasswordModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            
            await _userManager.IsEmailConfirmedAsync(user);

            UserTransportModel userModel = new UserTransportModel { Id = user.Id };
            userModel.Code= await _userManager.GeneratePasswordResetTokenAsync(user);

            return userModel;
        }
        public async Task ResetPasswordAsync(UserResetPasswordModel model)
        {
            var user = await _userManager.FindByNameAsync(model.Email);
            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);
        }
    }
}
