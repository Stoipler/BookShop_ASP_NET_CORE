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
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserRepository _userRepository;

        public UserService(UserManager<ApplicationUser> userManager,IUserRepository userRepository)
        {
            this._userManager = userManager;
            this._userRepository = userRepository;
        }

        public async Task<IEnumerable<UserModel>> GetAsync()
        {
            var users= await _userRepository.GetAsync();
            List<UserModel> userModels = new List<UserModel>();
            foreach(ApplicationUser user in users)
            {
                userModels.Add(new UserModel(user));
            }
            return userModels; 
        }
        public async Task<IdentityResult> CreateAsync(UserCreateModel model)
        {
            ApplicationUser user = new ApplicationUser { Email = model.Email, UserName = model.Email };
            return await _userManager.CreateAsync(user, model.Password);
        }
        public async Task UpdateAsync(ApplicationUser user)
        {
            await _userRepository.Update(user);
        }
        public async Task RemoveAsync(ApplicationUser user)
        {
            await _userRepository.Remove(user);
        }

    }
}
