using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class UserService : IUserService
    {
        private User _user;
        private readonly IUserRepository _userRepository;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserService(IUserRepository userRepository, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userRepository = userRepository;
            _userManager = userManager;
            _signInManager = signInManager;
        }
        public async Task<IdentityResult> SignUpAsync(SignUpUserModel userModel)
        {
            _user = new User
            {
                UserName = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Email = userModel.Email,
            };
            var result= await _userManager.CreateAsync(_user,userModel.Password);
            userModel.Id= _user.Id;
            userModel.SignUpToken= await _userManager.GenerateEmailConfirmationTokenAsync(_user);
            return result;
        }
        public async Task<SignInResult> SignInAsync(SignInUserModel userModel)
        {
            return await _signInManager.PasswordSignInAsync(userModel.Email,userModel.Password,false,false); 
        }

        public Task ConfirmEmailAsync( string code)
        {
            return _userManager.ConfirmEmailAsync(_user, code);
        }
    }
}
