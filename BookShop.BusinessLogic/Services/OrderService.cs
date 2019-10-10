using BookShop.BusinessLogic.Models.OrderModels;
using BookShop.BusinessLogic.Models.Payments;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Stripe;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Order = BookShop.DataAccess.Entities.Order;

namespace BookShop.BusinessLogic.Services
{
    public class OrderService : IOrderService
    {
        private readonly IPrintedEditionRepository _printedEditionRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly IUserRepository _userRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly CustomerService _customerService;
        private readonly ChargeService _chargeService;
        public OrderService(IPrintedEditionRepository printedEditionRepository,
            IOrderRepository orderRepository,
            IUserRepository userRepository,
            IHttpContextAccessor httpContextAccessor,
            UserManager<ApplicationUser> userManager,
            CustomerService customerService,
            ChargeService chargeService)
        {
            _printedEditionRepository = printedEditionRepository;
            _orderRepository = orderRepository;
            _userRepository = userRepository;
            _httpContextAccessor = httpContextAccessor;
            _userManager = userManager;
            _customerService = customerService;
            _chargeService = chargeService;
        }

        public async Task<string> CreateOrderAsync(PaymentDataRequestModel requestModel)
        {
            Customer customer = await _customerService.CreateAsync(new CustomerCreateOptions
            {
                Email = requestModel.StripeEmail,
                Source = requestModel.StripeToken
            });
            decimal totalPrice = 0;
            List<int> printedEditionIds = requestModel.CartItemModels.Select(item => item.PrintedEditionId).ToList();
            List<PrintedEdition> printedEditions = await _printedEditionRepository.GetRangeByIdAsync(printedEditionIds);
            if (printedEditions is null)
            {
                return "There is no any matching with printed edition Ids that you provided";
            }
            foreach (CartItemModel cartItem in requestModel.CartItemModels)
            {
                PrintedEdition printedEdition = printedEditions.Where(item => item.Id == cartItem.PrintedEditionId).FirstOrDefault();
                if (!(printedEdition is null))
                {
                    totalPrice += printedEdition.Price * cartItem.Quantity;
                }
            }
            Charge charge = await _chargeService.CreateAsync(new ChargeCreateOptions
            {
                Amount = ConvertToStripeAmount(totalPrice),
                Description = string.Format("Charge for {0} user", requestModel.StripeEmail),
                Currency = "usd",
                CustomerId = customer.Id
            });
            if (charge.StripeResponse.StatusCode != System.Net.HttpStatusCode.OK)
            {
                return "Stripe responded with status: " + charge.StripeResponse.StatusCode;
            }

            string[] namesList = printedEditions.Select(item => item.Name).ToArray();
            string description = "PrintedEditions :" + string.Join(", ", namesList);
            string userName = _httpContextAccessor.HttpContext.User.Identity.Name;
            ApplicationUser user = await _userManager.FindByNameAsync(userName);
            var order = new Order()
            {
                ApplicationUserId = user.Id,
                Description = description,
                OrderAmount = totalPrice,
            };
            await _orderRepository.CreateAsync(order);
            return string.Empty;
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

        public async Task<OrdersResponseModel> GetOrdersForAdmin(OrdersRequestModel requestModel)
        {
            OrderRequestParameters parameters = requestModel.MapToRequestParameters();
            (List<Order> orders, int count) = await _orderRepository.GetByParmeters(parameters);
            List<OrderModel> orderModels = orders.Select(item => new OrderModel(item)).ToList();
            OrdersResponseModel response = new OrdersResponseModel() { OrderModels = orderModels, Count = count };
            return response;
        }
        public async Task<OrdersResponseModel> GetOrdersForUser()
        {
            string userName = _httpContextAccessor.HttpContext.User.Identity.Name;
            ApplicationUser user = await _userManager.FindByNameAsync(userName);
            int id = user.Id;
            List<Order> orders = await _orderRepository.GetByUserId(id);
            List<OrderModel> orderModels = orders.Select(item => new OrderModel(item)).ToList();
            OrdersResponseModel response = new OrdersResponseModel() { OrderModels = orderModels };
            return response;
        }

        private long ConvertToStripeAmount(decimal price)
        {
            return (long)(price * 100);
        }
    }
}
