using BookShop.DataAccess.Entities;

namespace BookShop.BusinessLogic.Models.User
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
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
