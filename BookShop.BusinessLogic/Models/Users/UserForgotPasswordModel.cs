using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.User
{
    public class UserForgotPasswordModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public int Id { get; set; }
        public string Code { get; set; }
        public bool IsPossibleToUseCurrentEmail { get; set; }
    }
}
