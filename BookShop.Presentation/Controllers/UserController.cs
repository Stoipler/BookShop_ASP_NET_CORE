using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{   
    [Authorize]
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet("{id}")]
        public async Task<UserModel> GetById(int id)
        {
            return await this._userService.GetByIdAsync(id);
        }

        [HttpPost]
        public async Task Update([FromBody]UserModel model)
        {

            await _userService.UpdateAsync(model);
        }
    }
}
