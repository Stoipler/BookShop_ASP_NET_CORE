namespace BookShop.BusinessLogic.Models.User
{
    public class UserModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public UserModel(BookShop.DataAccess.Entities.User user)
        {
            Id = user.Id;
            FirstName= user.FirstName;
            LastName = user.LastName;
            Email = user.Email;
        }

    }
}
