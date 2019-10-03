using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Models.AccountModels;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly EmailHelper _emailHelper;

        public AccountController(IAccountService userService, EmailHelper emailHelper)
        {
            _accountService = userService;
            _emailHelper = emailHelper;
        }

        [HttpPost(Name = "SignIn")]
        public async Task<IActionResult> SignIn([FromBody]SignInRequestModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            SignInResponseModel responseModel = await _accountService.SignInAsync(requestModel);
            if (responseModel.SignInResult.Succeeded)
            {
                responseModel.SignInResult = null;
                return Ok(responseModel);
            }
            ModelState.AddModelError(string.Empty, "Wrong login or/and password");
            return BadRequest(ModelState);
        }
        [HttpPost(Name = "SignUp")]
        public async Task<IActionResult> SignUp([FromBody]SignUpRequestModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            SignUpResponseModel responseModel = await _accountService.SignUpAsync(requestModel);
            if (responseModel.IdentityResult.Succeeded)
            {
                string callbackUrl = CreateCallbackUrl("ConfirmEmail", new { userId = responseModel.Id, code = responseModel.SignUpToken, redirectUrl = requestModel.RedirectUrl });
                await _emailHelper.SendEmailAsync(requestModel.Email, "Confirm your account", $"Please confirm your registration using the link: <a title='Confirmation' href='{callbackUrl}'>link</a>");
            }
            if (!responseModel.IdentityResult.Succeeded)
            {
                foreach (IdentityError error in responseModel.IdentityResult.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
                return BadRequest(ModelState);
            }
            return Ok();
        }
        [HttpPost(Name = "ResetPassword")]
        public async Task<IActionResult> ResetPassword(ResetPasswordRequestModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            IdentityResult resetPasswordResult = await _accountService.ResetPasswordAsync(requestModel);
            if (resetPasswordResult.Succeeded)
            {
                return Ok();
            }
            foreach (IdentityError error in resetPasswordResult.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
            return BadRequest(requestModel);
        }
        [HttpPost(Name = "ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody]ForgotPasswordRequestModel requestModel)
        {
            if (ModelState.IsValid)
            {
                ForgotPasswordResponseModel responseModel = await _accountService.ForgotPasswordAsync(requestModel);
                if (!responseModel.IsPossibleToUseCurrentEmail)
                {
                    ModelState.AddModelError(string.Empty, "It's impossible to use email that you provided");
                    return BadRequest(ModelState);
                }
                string callbackUrl = CreateCallbackUrl("ResetPassword", new { userId = responseModel.Id, code = responseModel.Code, redirectUrl = requestModel.RedirectUrl, email = requestModel.Email });
                await _emailHelper.SendEmailAsync(requestModel.Email, "Reset Password", $"Для сброса пароля пройдите по ссылке: <a href='{callbackUrl}'>link</a>");
                return Ok();
            }
            return BadRequest(ModelState);
        }
        [HttpGet(Name = "ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId, string code, string redirectUrl)
        {
            await _accountService.ConfirmEmailAsync(userId, code);
            return Redirect(redirectUrl);
        }
        [HttpGet(Name = "ResetPassword")]
        public IActionResult ResetPassword([FromQuery]string redirectUrl, string email, string code = null)
        {
            if (string.IsNullOrWhiteSpace(code))
            {
                return BadRequest();
            }
            return Redirect(redirectUrl + "/?code=" + code + "&email=" + email);
        }

        private string CreateCallbackUrl(string action, object values)
        {
            string callbackUrl = Url.Action(
                    action,
                    "Account",
                    values,
                    Request.Scheme);
            return callbackUrl;
        }
    }
}
