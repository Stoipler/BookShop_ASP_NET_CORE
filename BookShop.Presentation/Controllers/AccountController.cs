using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace BookShop.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        #region Properties and variables
        private readonly IAccountService _accountService;
        private readonly EmailHelper _emailHelper;
        #endregion

        #region Constructors
        public AccountController(IAccountService userService, EmailHelper emailHelper)
        {
            _accountService = userService;
            _emailHelper = emailHelper;
        }
        #endregion

        #region Public methods
        [HttpPost("SignIn")]
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
        [HttpPost("SignUp")]
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
                    new { userId = model.Id, code = model.SignUpToken, redirectUrl = model.RedirectUrl },
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
        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId, string code, string redirectUrl)
        {
            await _accountService.ConfirmEmailAsync(userId, code);
            return Redirect(redirectUrl);
        }
        [HttpGet("ResetPassword")]
        public IActionResult ResetPassword([FromQuery]string redirectUrl, string email, string code = null)
        {
            if (string.IsNullOrWhiteSpace(code))
            {
                return BadRequest();
            }
            return Redirect(redirectUrl + "/?code=" + code + "&email=" + email);
        }
        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword(UserResetPasswordModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            IdentityResult result = await _accountService.ResetPasswordAsync(model);
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
        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody]UserForgotPasswordModel model)
        {
            if (ModelState.IsValid)
            {
                model = await _accountService.ForgotPasswordAsync(model);
                if (!model.IsPossibleToUseCurrentEmail)
                {
                    return BadRequest();
                }
                var callbackUrl = Url.Action("ResetPassword", "Account", new { userId = model.Id, code = model.Code, redirectUrl = model.RedirectUrl, email = model.Email }, protocol: HttpContext.Request.Scheme);
                await _emailHelper.SendEmailAsync(model.Email, "Reset Password",
                $"Для сброса пароля пройдите по ссылке: <a href='{callbackUrl}'>link</a>");
                return Ok();
            }
            return BadRequest(ModelState);
        }
        #endregion
    }
}
