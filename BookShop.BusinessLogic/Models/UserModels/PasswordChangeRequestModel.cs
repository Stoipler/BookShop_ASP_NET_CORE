using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.UserModels
{
    public class PasswordChangeRequestModel
    {
        [Required]
        public string CurrentPassword { get; set; }
        [Required]
        public string NewPassword { get; set; }
        [Required]
        [Compare("NewPassword")]
        public string NewPasswordConfirmation { get; set; }
    }
}
