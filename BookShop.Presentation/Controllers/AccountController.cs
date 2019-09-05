using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly EmailService _emailService;

        public AccountController(IAccountService userService, EmailService emailService)
        {
            _accountService = userService;
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<object> SignUp([FromBody]UserSignUpModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var signUpResult = await _accountService.SignUpAsync(model);
            if (signUpResult.Succeeded)
            {
                var callbackUrl = Url.Action(
                    "ConfirmEmail",
                    "Account",
                    new { userId = model.Id, code = model.SignUpToken },
                    Request.Scheme);

                await _emailService.SendEmailAsync(model.Email, "Confirm your account",
                    $"Please confirm your registration using the link: <a title='Confirmation' href='{callbackUrl}'>link</a>");

                await _accountService.SignInAsync(new UserSignInModel { Email = model.Email, Password = model.Password });
            }
            if (!signUpResult.Succeeded)
            {
                foreach (var error in signUpResult.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
                return BadRequest(ModelState);
            }

            return model;

        }

        [HttpPost]
        public async Task<object> SignIn([FromBody]UserSignInModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _accountService.SignInAsync(model);
            if (result.Succeeded)
            {
                return Ok(model);
            }

            ModelState.AddModelError("", "Wrong login or/and password");
            return BadRequest(ModelState);
        }

        [HttpGet]
        public async Task ConfirmEmail(string userId, string code)
        {
            await _accountService.ConfirmEmailAsync(userId, code);
        }

        [HttpGet]
        public void ResetPassword()
        {

        }

        [HttpPost]
        public async Task ForgotPassword([FromBody] UserForgotPasswordModel model)
        {
            UserTransportModel userModel = await _accountService.IsEmailConfirmedAsync(model);
            var callbackUrl = Url.Action("ResetPassword", "Account", new { userId = userModel.Id, code = userModel.Code }, Request.Scheme);
            await _emailService.SendEmailAsync(model.Email, "Reset Password",
                $"To reset password use the next link: <a href='{callbackUrl}'>link</a>");
        }



        [HttpPost]
        public async Task ResetPassword([FromBody]UserResetPasswordModel model)
        {
            await _accountService.ResetPasswordAsync(model);
        }
    }
}
