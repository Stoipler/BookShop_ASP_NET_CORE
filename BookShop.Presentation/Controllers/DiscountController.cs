using BookShop.BusinessLogic.Models.DiscountModels;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DiscountController : Controller
    {
        private readonly IDiscountService _discountService;

        public DiscountController(IDiscountService discountService)
        {
            _discountService = discountService;
        }

        [HttpPost(Name = "AddDiscount")]
        public async Task AddDiscount([FromBody]DiscountCreationModel requestModel)
        {
            await _discountService.AddDiscountAsync(requestModel);
        }

        [HttpPost(Name = "GetDiscounts")]
        public async Task<DiscountResponseModel> GetDiscounts(DiscountRequestModel requestModel)
        {
            DiscountResponseModel responseModel = await _discountService.GetDiscountsAsync(requestModel);

            return responseModel;
        }
    }
}
