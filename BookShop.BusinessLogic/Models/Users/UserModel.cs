using BookShop.DataAccess.Entities;

namespace BookShop.BusinessLogic.Models.User
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public UserModel(ApplicationUser user)
        {
            Id = user.Id;
            FirstName= user.FirstName;
            LastName = user.LastName;
            Email = user.Email;
        }

    }
}
