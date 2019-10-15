using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<Order>, int)> GetByParmeters(OrderRequestParameters parameters)
        {
            IQueryable<Order> orders = _dbSet.Include(item => item.ApplicationUser);

            if (!string.IsNullOrWhiteSpace(parameters.KeyWord))
            {
                orders = orders.Where(item =>
                item.ApplicationUser.UserName.Contains(parameters.KeyWord) ||
                item.ApplicationUser.FirstName.Contains(parameters.KeyWord) ||
                item.ApplicationUser.LastName.Contains(parameters.KeyWord));
            }

            int count = await orders.CountAsync();
            int countToSkip = (--parameters.Page) * parameters.PageSize;

            orders = orders.Skip(countToSkip).Take(parameters.PageSize);

            List<Order> response = await orders.ToListAsync();

            return (response, count);
        }

        public async Task<List<Order>> GetByUserId(int id)
        {
            List<Order> orders = await _dbSet.Where(item => item.ApplicationUserId == id).ToListAsync();

            return orders;
        }
    }
}
