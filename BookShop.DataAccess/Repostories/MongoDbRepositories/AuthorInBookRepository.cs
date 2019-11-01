using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using BookShop.DataAccess.Repostories.MongoDbRepositories.Base;
using MongoDbGenericRepository;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories
{
    public class AuthorInBookRepository : BaseRepository<AuthorInBook>, IAuthorInBookRepository
    {
        public AuthorInBookRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
        {
        }
    }
}
