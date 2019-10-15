using BookShop.BusinessLogic.Models.UserModels;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            this._userService = userService;
        }

        [Authorize(Roles = "admin")]
        [HttpPost(Name = "GetUsers")]
        public async Task<UserResponseModel> GetUsers([FromBody]UserRequestModel requestModel)
        {
            UserResponseModel responseModel = await _userService.GetUsersAsync(requestModel);
            return responseModel;
        }
        [Authorize(Roles = "admin")]
        [HttpPost(Name = "UpdateUser")]
        public async Task UpdateUser([FromBody]UserModel requestModel)
        {
            await _userService.UpdateUserAsync(requestModel);
        }
        [HttpGet(Name = "GetUserProfile")]
        public async Task<UserProfileResponseModel> GetUserProfile()
        {
            UserProfileResponseModel responseModel = await _userService.GetUserProfileAsync();
            return responseModel;
        }
        [HttpPost(Name = "UpdateUserProfile")]
        public async Task UpdateUserProfile(UserProfileRequestModel requestModel)
        {
            await _userService.UpdateUserProfileAsync(requestModel);
        }

    }
}
