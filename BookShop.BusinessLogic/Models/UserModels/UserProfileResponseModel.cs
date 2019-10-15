using BookShop.DataAccess.Entities;

namespace BookShop.BusinessLogic.Models.UserModels
{
    public class UserProfileResponseModel : UserModel
    {
        public UserProfileResponseModel(ApplicationUser enity):base(enity)
        {

        }
    }
}
