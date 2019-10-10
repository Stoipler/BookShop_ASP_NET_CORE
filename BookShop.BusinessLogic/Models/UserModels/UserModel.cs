using BookShop.DataAccess.Entities;

namespace BookShop.BusinessLogic.Models.UserModels
{
    public class UserModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsRemoved { get; set; }


        public UserModel(ApplicationUser entity)
        {
            FirstName = entity.FirstName;
            LastName = entity.LastName;
            Email = entity.Email;
            IsRemoved = entity.IsRemoved;
        }
    }
}
