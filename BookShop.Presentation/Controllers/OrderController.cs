using BookShop.BusinessLogic.Models.CartModels;
using BookShop.BusinessLogic.Models.Payments;
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

        public OrderController(CustomerService customerService, ChargeService chargeService)
        {
            _customerService = customerService;
            _chargeService = chargeService;
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
        [HttpPost(Name = "GetOrderItems")]
        public async Task<CartItemPageModel> GetOrderItems([FromBody]CartListItemModel model)
        {
            if (ModelState.IsValid)
            {

            }
            Customer customer = await _customerService.CreateAsync(new CustomerCreateOptions
            {
                Email = "sdasda",
                Source = "sdadsa"
            });
            return new CartItemPageModel();
        }
    }
}