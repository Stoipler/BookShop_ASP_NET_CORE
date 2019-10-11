using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.AccountModels
{
    public class ForgotPasswordRequestModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string RedirectUrl { get; set; }
    }
}
