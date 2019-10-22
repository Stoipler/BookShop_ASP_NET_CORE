using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class DiscountInBookRepository : BaseRepository<DiscountInBook>, IDiscountInBookRepository
    {
        public DiscountInBookRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
