using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using BookShop.DataAccess.Repostories.MongoDbRepositories.Base;
using MongoDbGenericRepository;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories
{
    public class OrderItemRepository : BaseRepository<OrderItem>, IOrderItemRepository
    {
        public OrderItemRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
        {
        }
    }
}
