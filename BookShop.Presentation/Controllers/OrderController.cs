using BookShop.BusinessLogic.Models.OrderModels;
using BookShop.BusinessLogic.Models.Payments;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class OrderController : Controller
    {
        private readonly CustomerService _customerService;
        private readonly ChargeService _chargeService;
        private readonly IOrderService _orderService;

        public OrderController(CustomerService customerService, ChargeService chargeService, IOrderService orderService)
        {
            _customerService = customerService;
            _chargeService = chargeService;
            _orderService = orderService;
        }

        [HttpPost(Name = "SendPaymentData")]
        public async Task<IActionResult> SendPaymentData([FromBody]PaymentDataRequestModel requestModel)
        {
            if (ModelState.IsValid)
            {
                Customer customer = await _customerService.CreateAsync(new CustomerCreateOptions
                {
                    Email = requestModel.StripeEmail,
                    Source = requestModel.StripeToken
                });
                decimal totalPrice = await _orderService.GetTotalPriceAsync(requestModel.CartItemModels);
                Charge charge = await _chargeService.CreateAsync(new ChargeCreateOptions
                {
                    Amount = ConvertToStripeAmount(totalPrice),
                    Description = string.Format("Charge for {0} user", requestModel.StripeEmail),
                    Currency = "usd",
                    CustomerId = customer.Id
                });
                if (charge.StripeResponse.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    await _orderService.CreateOrderAsync(requestModel);
                    return Ok();
                }
                return BadRequest();
            }
            return BadRequest(ModelState);
        }
        [HttpPost(Name = "GetCheckout")]
        public async Task<CartResponseModel> GetCheckout([FromBody]CartRequestModel requestModel)
        {
            return await _orderService.GetCheckoutAsync(requestModel);
        }

        private long ConvertToStripeAmount(decimal price)
        {
            return (long)(price * 100);
        }
    }
}