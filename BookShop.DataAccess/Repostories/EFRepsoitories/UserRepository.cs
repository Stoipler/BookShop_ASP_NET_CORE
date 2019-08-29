using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class UserRepository : IUserRepository
    {
        ApplicationContext _context;
        DbSet<User> _dbSet;

        public UserRepository(ApplicationContext context)
        {
            _context = context;
            _dbSet = context.Set<User>();
        }
        public IEnumerable<User> Get()
        {
            return _dbSet.AsNoTracking().ToList();
        }
        public void Create(User user)
        {
            _dbSet.Add(user);
            _context.SaveChanges();
        }
    }
}
