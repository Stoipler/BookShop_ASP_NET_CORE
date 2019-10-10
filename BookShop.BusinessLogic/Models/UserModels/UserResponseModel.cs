using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.UserModels
{
    public class UserResponseModel
    {
        public int Count { get; set; }
        public List<UserModel> UserModels { get; set; }
    }
}
