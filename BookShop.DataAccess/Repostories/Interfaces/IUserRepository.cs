using BookShop.DataAccess.Entities;
using System.Collections.Generic;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IUserRepository
    {
        void Create(User user);
        IEnumerable<User> Get();
    }
}
