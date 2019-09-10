using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace BookShop.Presentation.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly EmailHelper _emailHelper;
        private readonly string _applicatonLink;


        public AccountController(IAccountService userService, EmailHelper emailHelper)
        {
            _accountService = userService;
            _emailHelper = emailHelper;
            _applicatonLink = Environment.GetEnvironmentVariable("ClientAppRoot");
        }
       
       
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> SignUp([FromBody]UserSignUpModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            IdentityResult signUpResult = await _accountService.SignUpAsync(model);
            if (signUpResult.Succeeded)
            {
                var callbackUrl = Url.Action(
                    "ConfirmEmail",
                    "Account",
                    new { userId = model.Id, code = model.SignUpToken },
                    Request.Scheme);

                await _emailHelper.SendEmailAsync(model.Email, "Confirm your account",
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

            return Ok(model);

        }
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> SignIn([FromBody]UserSignInModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            SignInResult result = await _accountService.SignInAsync(model);
            if (result.Succeeded)
            {
                return Ok(model);
            }

            ModelState.AddModelError(string.Empty, "Wrong login or/and password");
            return BadRequest(ModelState);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            await _accountService.ConfirmEmailAsync(userId, code);
            return Redirect(_applicatonLink+ "/account/emailconfirmed");
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ResetPassword(string code = null)
        {
            if(code is null)
            {
                return BadRequest();
            }

            return Redirect(_applicatonLink + "/account/resetpassword" + "/?code="+code);
            
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword(UserResetPasswordModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            IdentityResult result= await _accountService.ResetPasswordAsync(model);
            if (result.Succeeded)
            {
                return Ok();
            }
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
            return BadRequest(model);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword([FromBody]UserForgotPasswordModel model)
        {
            if (ModelState.IsValid)
            {
                model =await _accountService.ForgotPasswordAsync(model);

                if (!model.IsPossibleToUseCurrentEmail)
                {
                    return BadRequest();
                }

                var callbackUrl = Url.Action("ResetPassword", "Account", new { userId = model.Id, code = model.Code }, protocol: HttpContext.Request.Scheme);
                await _emailHelper.SendEmailAsync(model.Email, "Reset Password",
                $"Для сброса пароля пройдите по ссылке: <a href='{callbackUrl}'>link</a>");
                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
}
