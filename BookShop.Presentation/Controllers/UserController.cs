using BookShop.BusinessLogic.Models.Account;
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

        [HttpGet("{id}")]
        public async Task<UserModel> GetById(int id)
        {
            return await this._userService.GetByIdAsync(id);
        }

        [HttpPost]
        public async Task<IActionResult> Update([FromBody]UserModel model)
        {
            if (ModelState.IsValid)
            {
                await _userService.UpdateAsync(model);
                return Ok();
            }
            return BadRequest(ModelState);

        }
    }
}
