using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.User
{
    public class UserSignInModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
