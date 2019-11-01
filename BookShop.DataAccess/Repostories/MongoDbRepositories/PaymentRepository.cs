using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using BookShop.DataAccess.Repostories.MongoDbRepositories.Base;
using MongoDbGenericRepository;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories
{
    public class PaymentRepository : BaseRepository<Payment>, IPaymentRepository
    {
        public PaymentRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
        {
        }
    }
}
