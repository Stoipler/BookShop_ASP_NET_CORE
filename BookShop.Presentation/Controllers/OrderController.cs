using BookShop.BusinessLogic.Models.OrderModels;
using BookShop.BusinessLogic.Models.Payments;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]/[action]")]
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost(Name = "SendPaymentData")]
        public async Task<IActionResult> SendPaymentData([FromBody]PaymentDataRequestModel requestModel)
        {
            if (ModelState.IsValid)
            {
                string result = await _orderService.CreateOrderAsync(requestModel);

                if (!string.IsNullOrWhiteSpace(result))
                {
                    ModelState.AddModelError(string.Empty, result);

                    return BadRequest(ModelState);
                }

                return Ok();
            }

            return BadRequest(ModelState);
        }

        [HttpPost(Name = "GetCheckout")]
        public async Task<CartResponseModel> GetCheckout([FromBody]CartRequestModel requestModel)
        {
            return await _orderService.GetCheckoutAsync(requestModel);
        }

        [HttpGet(Name = "GetOrdersForUser")]
        public async Task<OrdersResponseModel> GetOrdersForUser()
        {
            OrdersResponseModel result = await _orderService.GetOrdersForUser();

            return result;
        }

        [Authorize(Roles = "admin")]
        [HttpPost(Name = "GetOrdersForAdmin")]
        public async Task<OrdersResponseModel> GetOrdersForAdmin([FromBody] OrdersRequestModel requestModel)
        {
            OrdersResponseModel responseModel = await _orderService.GetOrdersForAdmin(requestModel);

            return responseModel;
        }
    }
}