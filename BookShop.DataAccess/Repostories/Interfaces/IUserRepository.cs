using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IUserRepository : IGenericRepository<ApplicationUser>
    {
        Task<(List<ApplicationUser> users, int count)> GetUsersAsync(UserRequestParameters parameters);
    }
}
