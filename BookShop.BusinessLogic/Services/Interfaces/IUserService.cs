using BookShop.BusinessLogic.Models.User;
using BookShop.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<UserModel>> GetAsync();
        Task<IdentityResult> CreateAsync(UserCreateModel model);
        Task Update(User user);
        Task Remove(User user);
    }
}
