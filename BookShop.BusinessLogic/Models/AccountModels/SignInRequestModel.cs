using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.AccountModels
{
    public class SignInRequestModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
