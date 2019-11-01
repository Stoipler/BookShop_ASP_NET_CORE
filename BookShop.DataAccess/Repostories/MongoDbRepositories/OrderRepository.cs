using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.Interfaces;
using BookShop.DataAccess.Repostories.MongoDbRepositories.Base;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDbGenericRepository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
        {
        }

        public async Task<(List<Order>, int)> GetByParmeters(OrderRequestParameters parameters)
        {
            IMongoQueryable<Order> orders = _mongoCollection.AsQueryable();

            orders = orders.Where(item => !item.ApplicationUser.IsRemoved);

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

        public async Task<List<Order>> GetRangeByUserId(string id)
        {
            List<Order> orders = await _mongoCollection.AsQueryable().Where(item => item.ApplicationUserId == id).ToListAsync();

            return orders;
        }
    }
}
