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
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IUserRepository _userRepository;
        public UserService(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, IUserRepository userRepository)
        {
            this._signInManager = signInManager;
            this._userManager = userManager;
            this._userRepository = userRepository;
        }
        public async Task<UserModel> GetByIdAsync(int id)
        {
            ApplicationUser user = await _userRepository.GetByIdAsync(id);
            UserModel model = new UserModel();
            model.MapToModel(user);
            return model;
        }

        public async Task UpdateAsync(UserModel model)
        {
            ApplicationUser user = await _userRepository.GetByIdAsync(model.Id);
            model.MapToEnity(user);
            await _userRepository.Update(user);
            SignInResult signInResult = await _signInManager.PasswordSignInAsync(model.Email, model.OldPassword, false, false);
            if (!string.IsNullOrWhiteSpace(model.NewPassword))
            {
                if (signInResult.Succeeded && (model.NewPassword == model.NewPasswordConfirmation))
                {
                    await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
                }
            }
        }
    }
}
