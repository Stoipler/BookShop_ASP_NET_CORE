using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class AuthorInBookRepository : BaseRepository<AuthorInBook>, IAuthorInBookRepository
    {
        public AuthorInBookRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
