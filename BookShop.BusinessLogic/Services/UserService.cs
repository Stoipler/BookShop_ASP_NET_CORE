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
            User user = new User
            {
                UserName = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Email = userModel.Email,
            };
            return await _userManager.CreateAsync(user,userModel.Password);
        }
        public async Task<SignInResult> SignInAsync(SignInUserModel userModel)
        {
            return await _signInManager.PasswordSignInAsync(userModel.Email,userModel.Password,false,false); 
        }
    }
}
