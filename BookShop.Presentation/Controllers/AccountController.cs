using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public void Registration()
        {
            
        }

        [HttpGet]
        public void SignIn()
        {
            
        }

        [HttpPost]
        public async Task<IActionResult> Registration([FromBody]SignUpUserModel model)
        {
            if (model is null)
            {
                return BadRequest();
            }

            var result=await _userService.SignUpAsync(model);
            if (result.Succeeded)
            {
                await _userService.SignInAsync(new SignInUserModel { Email = model.Email, Password = model.Password });
            }
            return Ok(model);
        }

        [HttpPost]
        public async Task<IActionResult> SignIn([FromBody]SignInUserModel model)
        {
            if (model is null)
            {
                return BadRequest();
            }

            var result=await _userService.SignInAsync(model);
            
            return Ok(model);
        }
    }
}
