using BookShop.BusinessLogic.Models.UserModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IUserRepository _userRepository;
        public UserService(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, IUserRepository userRepository, IHttpContextAccessor httpContextAccessor)
        {
            this._signInManager = signInManager;
            this._userManager = userManager;
            this._userRepository = userRepository;
            this._httpContextAccessor = httpContextAccessor;
        }

        public async Task<UserProfileResponseModel> GetUserProfileAsync()
        {
            string userName = _httpContextAccessor.HttpContext.User.Identity.Name;
            ApplicationUser user = await _userManager.FindByNameAsync(userName);
            UserProfileResponseModel responseModel = new UserProfileResponseModel(user);
            return responseModel;
        }

        public async Task<UserResponseModel> GetUsersAsync(UserRequestModel requestModel)
        {
            UserRequestParameters parameters = requestModel.MapToRequestParameters();
            (List<ApplicationUser> users, int count) = await _userRepository.GetUsersAsync(parameters);
            List<UserModel> userModels = users.Select(item => new UserModel(item)).ToList();
            UserResponseModel responseModel = new UserResponseModel() { Count = count, UserModels = userModels };
            return responseModel;
        }

        public async Task UpdateUserAsync(UserModel requestModel)
        {
            ApplicationUser user = await _userRepository.GetByIdAsync(requestModel.Id);
            user = requestModel.MapToEntity(user);
            await _userRepository.UpdateAsync(user);
        }

        public async Task UpdateUserProfileAsync(UserProfileRequestModel requestModel)
        {
            ApplicationUser user = await _userRepository.GetByIdAsync(requestModel.Id);
            user = requestModel.MapToEntity(user);
            await _userRepository.UpdateAsync(user);
            bool condition = !(string.IsNullOrWhiteSpace(requestModel.CurrentPassword)) && !(string.IsNullOrWhiteSpace(requestModel.Password)) && requestModel.Password == requestModel.PasswordConfirmation;
            if (condition)
            {
                await _userManager.ChangePasswordAsync(user, requestModel.CurrentPassword, requestModel.Password);
            }
        }
    }
}
