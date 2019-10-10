using System.Collections.Generic;
using System.Threading.Tasks;
using BookShop.BusinessLogic.Models.OrderModels;
using BookShop.BusinessLogic.Models.Payments;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IOrderService
    {
        Task<CartResponseModel> GetCheckoutAsync(CartRequestModel requestModel);
        Task<string> CreateOrderAsync(PaymentDataRequestModel requestModel);
        Task<OrdersResponseModel> GetOrdersForUser();
        Task<OrdersResponseModel> GetOrdersForAdmin(OrdersRequestModel requestModel);
    }
}
