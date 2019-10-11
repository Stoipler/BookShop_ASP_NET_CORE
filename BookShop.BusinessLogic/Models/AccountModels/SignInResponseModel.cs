using Microsoft.AspNetCore.Identity;

namespace BookShop.BusinessLogic.Models.AccountModels
{
    public class SignInResponseModel
    {
        public string Token { get; set; }
        public SignInResult SignInResult { get; set; }
    }
}
