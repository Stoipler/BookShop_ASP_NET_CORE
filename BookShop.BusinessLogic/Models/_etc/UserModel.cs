using BookShop.DataAccess.Entities;
using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.Account
{
    public class UserModel
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
        public string NewPasswordConfirmation { get; set; }
        public UserModel()
        {
            
        }

        public void MapToModel(ApplicationUser user)
        {
            Id = user.Id;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Email = user.Email;
        }

        public void MapToEnity(ApplicationUser user)
        {
            user.FirstName = FirstName;
            user.LastName = LastName;
        }
    }
}
