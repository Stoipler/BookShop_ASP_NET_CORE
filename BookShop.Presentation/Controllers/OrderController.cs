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
        public async Task<IActionResult> SendPaymentData([FromBody]PaymentDataModel model)
        {
            if (ModelState.IsValid)
            {
                Customer customer = await _customerService.CreateAsync(new CustomerCreateOptions
                {
                    Email = model.StripeEmail,
                    Source = model.StripeToken
                });
                var charge = await _chargeService.CreateAsync(new ChargeCreateOptions
                {
                    Amount = 500,
                    Description = "Sample Charge",
                    Currency = "usd",
                    CustomerId = customer.Id
                });
                return Ok();
            }
            return BadRequest(ModelState);
        }
        [HttpPost(Name = "GetCheckout")]
        public async Task<CartResponseModel> GetCheckout([FromBody]CartRequestModel requestModel)
        {
            return await _orderService.GetCheckoutAsync(requestModel);
        }
    }
}