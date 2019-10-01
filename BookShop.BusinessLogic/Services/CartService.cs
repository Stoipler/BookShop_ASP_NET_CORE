using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class CartService : ICartService
    {
        private readonly IOrderItemRepository _orderItemRepository;
        public CartService(IOrderItemRepository orderItemRepository)
        {
            _orderItemRepository = orderItemRepository;
        }     
    }
}
