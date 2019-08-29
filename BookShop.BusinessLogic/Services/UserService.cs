using BookShop.BusinessLogic.Models.Users;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
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
        public IEnumerable<UserModel> GetAll()
        {
            IEnumerable<User> users = _userRepository.Get();
            List<UserModel> userModels = new List<UserModel>();
            foreach (User user in users)
            {
                userModels.Add(new UserModel { FirstnName = user.FirstName, LastName = user.LastName });
            }
            return userModels;
        }
        public async Task SignUp(SignUpUserModel userModel)
        {
            User user = new User
            {
                UserName = userModel.FirstName + userModel.LastName,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Email = userModel.Email,
            };
            await _userManager.CreateAsync(user,userModel.Password);
        }
        //public async Task SingnIn(SignUpUserModel userModel)
        //{
        //    User user = new User
        //    {
        //        UserName = userModel.FirstName + userModel.LastName,
        //        FirstName = userModel.FirstName,
        //        LastName = userModel.LastName,
        //        Email = userModel.Email,
        //    };
        //    await _userManager.CreateAsync(user, userModel.Password);
        //}


    }
}
