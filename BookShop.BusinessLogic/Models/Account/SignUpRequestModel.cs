using BookShop.DataAccess.Entities;
using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.Account
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
        public string PasswordConfirmation { get; set; }
        public string RedirectUrl { get; set; }

        internal ApplicationUser MapToEntity(ApplicationUser entity = null)
        {
            if (entity is null)
            {
                entity = new ApplicationUser();
            }
            entity.FirstName = FirstName;
            entity.LastName = LastName;
            entity.Email = Email;
            entity.UserName = Email;
            return entity;
        }
    }
}
