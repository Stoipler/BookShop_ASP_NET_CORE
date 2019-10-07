using BookShop.BusinessLogic.Models.OrderModels;
using BookShop.BusinessLogic.Models.Payments;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class OrderService : IOrderService
    {
        private readonly IPrintedEditionRepository _printedEditionRepository;
        private readonly IOrderRepository _orderRepository;
        public OrderService(IPrintedEditionRepository printedEditionRepository, IOrderRepository orderRepository)
        {
            _printedEditionRepository = printedEditionRepository;
            _orderRepository = orderRepository;
        }

        public Task CreateOrderAsync(PaymentDataRequestModel requestModel)
        {
            throw new System.NotImplementedException();
        }

        public async Task<CartResponseModel> GetCheckoutAsync(CartRequestModel requestModel)
        {
            CartResponseModel responseModel = new CartResponseModel();
            decimal totalPrice = 0;
            List<int> printedEditionIds = requestModel.CartItemModels.Select(item => item.PrintedEditionId).ToList();
            List<PrintedEdition> printedEditions = await _printedEditionRepository.GetRangeByIdAsync(printedEditionIds);
            foreach (CartItemModel cartItem in requestModel.CartItemModels)
            {
                PrintedEdition printedEdition = printedEditions.Where(item => item.Id == cartItem.PrintedEditionId).FirstOrDefault();
                CheckoutItemModel checkoutItem = new CheckoutItemModel
                {
                    PrintedEditionId = printedEdition.Id,
                    PrintedEditionName = printedEdition.Name,
                    Quantity = cartItem.Quantity,
                    UnitPrice = printedEdition.Price,
                    OrderAmount = printedEdition.Price * cartItem.Quantity
                };
                totalPrice += checkoutItem.OrderAmount;
                responseModel.CheckoutItemModels.Add(checkoutItem);
            }
            responseModel.TotalPrice = totalPrice;
            return responseModel;
        }

        public async Task<decimal> GetTotalPriceAsync(List<CartItemModel> cartItemModels)
        {
            decimal totalPrice = 0;
            List<int> printedEditionIds = cartItemModels.Select(item => item.PrintedEditionId).ToList();
            List<PrintedEdition> printedEditions = await _printedEditionRepository.GetRangeByIdAsync(printedEditionIds);
            if (printedEditions is null)
            {
                return totalPrice;
            }
            foreach (CartItemModel cartItem in cartItemModels)
            {
                PrintedEdition printedEdition = printedEditions.Where(item => item.Id == cartItem.PrintedEditionId).FirstOrDefault();
                if (!(printedEdition is null))
                {
                    totalPrice += printedEdition.Price * cartItem.Quantity;
                }
            }
            return totalPrice;
        }
    }
}
