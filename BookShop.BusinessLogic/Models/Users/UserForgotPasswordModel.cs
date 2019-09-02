using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.User
{
    public class UserForgotPasswordModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
