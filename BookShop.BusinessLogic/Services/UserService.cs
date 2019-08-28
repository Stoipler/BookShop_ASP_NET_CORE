using BookShop.BusinessLogic.Models.Users;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;

namespace BookShop.BusinessLogic.Services
{
    public class UserService:IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
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
        public void Register(RegistrationUserModel userModel)
        {
            User user = new User { FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Email = userModel.Email,
                PasswordHash = userModel.Password };
            _userRepository.Create(user);
        }
    }
}
