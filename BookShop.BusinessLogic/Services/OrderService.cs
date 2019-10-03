using BookShop.BusinessLogic.Models.OrderModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class OrderService : IOrderService
    {
        private readonly IPrintedEditionRepository _printedEditionRepository;
        public OrderService(IPrintedEditionRepository printedEditionRepository)
        {
            _printedEditionRepository = printedEditionRepository;
        }

        public async Task<CartResponseModel> GetCheckoutAsync(CartRequestModel requestModel)
        {
            CartResponseModel responseModel = new CartResponseModel();
            decimal totalPrice = 0;
            foreach (CartItemModel cartItem in requestModel.CartItemModels)
            {
                PrintedEdition printedEdition = await _printedEditionRepository.GetByIdAsync(cartItem.PrintedEditionId);
                CheckoutItemModel checkoutItem = new CheckoutItemModel();
                checkoutItem.PrintedEditionId = printedEdition.Id;
                checkoutItem.PrintedEditionName = printedEdition.Name;
                checkoutItem.Quantity = cartItem.Quantity;
                checkoutItem.UnitPrice = printedEdition.Price;
                checkoutItem.OrderAmount = printedEdition.Price * cartItem.Quantity;
                totalPrice += checkoutItem.OrderAmount;
                responseModel.CheckoutItemModels.Add(checkoutItem);
            }
            responseModel.TotalPrice = totalPrice;
            return responseModel;
        }
    }
}
