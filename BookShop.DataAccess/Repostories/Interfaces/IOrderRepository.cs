using System.Collections.Generic;
using System.Threading.Tasks;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces.Base;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IOrderRepository : IGenericRepository<Order>
    {
        Task<List<Order>> GetByUserId(int id);
    }
}
