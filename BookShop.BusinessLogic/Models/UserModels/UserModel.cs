using BookShop.DataAccess.Entities;

namespace BookShop.BusinessLogic.Models.UserModels
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsRemoved { get; set; }
        public UserModel()
        {

        }

        internal UserModel(ApplicationUser entity) : this()
        {
            Id = entity.Id;
            FirstName = entity.FirstName;
            LastName = entity.LastName;
            Email = entity.Email;
            IsRemoved = entity.IsRemoved;
        }

        internal ApplicationUser MapToEntity(ApplicationUser entity)
        {
            entity.FirstName = FirstName;
            entity.LastName = LastName;
            entity.IsRemoved = IsRemoved;
            return entity;
        }
    }
}
