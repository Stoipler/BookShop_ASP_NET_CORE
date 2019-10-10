using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<List<Order>> GetByUserId(int id)
        {
            List<Order> orders = await _dbSet.Where(item => item.ApplicationUserId == id).ToListAsync();
            return orders;
        }
    }
}
