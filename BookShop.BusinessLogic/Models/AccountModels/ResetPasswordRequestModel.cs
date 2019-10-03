using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.AccountModels
{
    public class ResetPasswordRequestModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare("Password")]
        public string PasswordConfirmation { get; set; }
        [Required]
        public string Code { get; set; }
    }
}
