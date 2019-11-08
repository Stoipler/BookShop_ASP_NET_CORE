using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class AuthorInBookRepository : BaseRepository<AuthorInBook>, IAuthorInBookRepository
    {
        public AuthorInBookRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
