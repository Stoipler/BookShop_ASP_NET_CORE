using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class OrderItemRepository : BaseRepository<OrderItem>, IOrderItemRepository
    {
        public OrderItemRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
