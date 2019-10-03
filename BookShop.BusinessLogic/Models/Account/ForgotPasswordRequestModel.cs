using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.Account
{
    public class ForgotPasswordRequestModel
    {
        [Required]
        public string Email { get; set; }
        public string RedirectUrl { get; set; }
    }
}
