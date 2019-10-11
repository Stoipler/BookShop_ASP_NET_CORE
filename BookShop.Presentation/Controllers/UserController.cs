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

        [HttpPost(Name = "GetUsers")]
        public async Task<UserResponseModel> GetUsers([FromBody]UserRequestModel requestModel)
        {
            UserResponseModel responseModel = await _userService.GetUsersAsync(requestModel);
            return responseModel;
        }
        [HttpPost(Name = "UpdateUser")]
        public async Task UpdateUser([FromBody]UserModel requestModel)
        {
            await _userService.UpdateUserAsync(requestModel);
        }

    }
}
