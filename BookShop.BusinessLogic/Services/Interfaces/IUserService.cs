using BookShop.BusinessLogic.Models.Users;
using BookShop.DataAccess.Entities;
using System.Collections.Generic;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IUserService
    {
        IEnumerable<UserModel> GetAll();

        void Register(RegistrationUserModel userModel);
    }
}
