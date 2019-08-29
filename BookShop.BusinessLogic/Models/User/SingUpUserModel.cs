using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.Users
{
    public class SignUpUserModel
    {
        [Required]
        [Display(Name = "First name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last name")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "E-mail")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        //[Required]
        //[Compare("Password", ErrorMessage = "Passwords dont match")]
        //[DataType(DataType.Password)]
        //[Display(Name = "Password confirmation")]
        //public string PasswordConfirmation { get; set; }
    }
}
