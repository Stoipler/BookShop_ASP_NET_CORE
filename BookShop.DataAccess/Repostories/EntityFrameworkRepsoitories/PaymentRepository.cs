using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class PaymentRepository : BaseRepository<Payment>, IPaymentRepository
    {
        public PaymentRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
