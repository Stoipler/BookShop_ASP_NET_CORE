using BookShop.DataAccess.Entities;
using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.AccountModels
{
    public class SignUpRequestModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare("Password")]
        public string PasswordConfirmation { get; set; }
        public string RedirectUrl { get; set; }

        internal ApplicationUser MapToEntity(ApplicationUser entity)
        {
            entity.FirstName = FirstName;
            entity.LastName = LastName;
            entity.Email = Email;
            entity.UserName = Email;
            return entity;
        }
    }
}
