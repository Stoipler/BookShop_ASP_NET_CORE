using BookShop.BusinessLogic.Models.User;
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
        private readonly UserManager<User> _userManager;
        private readonly IUserRepository _userRepository;

        public UserService(UserManager<User> userManager,IUserRepository userRepository)
        {
            this._userManager = userManager;
            this._userRepository = userRepository;
        }

        public async Task<IEnumerable<User>> GetAsync()
        {
            return await _userRepository.GetAsync();
        }
        public async Task<IdentityResult> CreateAsync(UserCreateModel model)
        {
            User user = new User { Email = model.Email, UserName = model.Email };
            return await _userManager.CreateAsync(user, model.Password);
        }
        public async Task Update(User user)
        {
            await _userRepository.Update(user);
        }
        public async Task Remove(User user)
        {
            await _userRepository.Remove(user);
        }

    }
}
