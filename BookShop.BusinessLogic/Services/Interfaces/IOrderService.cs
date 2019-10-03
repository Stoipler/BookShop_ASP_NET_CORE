using System.Threading.Tasks;
using BookShop.BusinessLogic.Models.OrderModels;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IOrderService
    {
        Task<CartResponseModel> GetCheckoutAsync(CartRequestModel requestModel);
    }
}
