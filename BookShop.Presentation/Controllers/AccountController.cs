using BookShop.BusinessLogic.Common;
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
        private readonly EmailService _emailService;

        public AccountController(IUserService userService, EmailService emailService)
        {
            _userService = userService;
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> Registration([FromBody]SignUpUserModel model)
        {
            if (model is null)
            {
                return BadRequest();
            }

            var result = await _userService.SignUpAsync(model);
            if (result.Succeeded)
            {
                var callbackUrl = Url.Action(
                    "ConfirmEmail",
                    "Account",
                    new { userId = model.Id, code = model.SignUpToken },
                    Request.Scheme);

                await _emailService.SendEmailAsync(model.Email, model.FirstName, "Confirm your account",
                    $"Подтвердите регистрацию, перейдя по ссылке: <a href='{callbackUrl}'>link</a>");

                var signInResult = await _userService.SignInAsync(new SignInUserModel { Email = model.Email, Password = model.Password });
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

            var result = await _userService.SignInAsync(model);

            return Ok(model);
        }

        [HttpGet]
        public async Task ConfirmEmail(string userId, string code)
        {
            //if (userId == null || code == null)
            //{
            //    return View("Error");
            //}
            //var user = await _userManager.FindByIdAsync(userId);
            //if (user == null)
            //{
            //    return View("Error");
            //}
            await _userService.ConfirmEmailAsync(code);
            //if (result.Succeeded)
            //    return RedirectToAction("Index", "Home");
            //else
            //    return View("Error");
        }
    }
}
