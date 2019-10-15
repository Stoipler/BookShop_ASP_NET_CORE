namespace BookShop.BusinessLogic.Models.UserModels
{
    public class UserProfileRequestModel : UserModel
    {
        public string CurrentPassword { get; set; }
        public string Password { get; set; }
        public string PasswordConfirmation { get; set; }
    }
}
