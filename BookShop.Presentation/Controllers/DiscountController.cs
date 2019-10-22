using BookShop.BusinessLogic.Models.DiscountModels;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    public class DiscountController : Controller
    {
        private readonly IDiscountService _discountService;

        public DiscountController(IDiscountService discountService)
        {
            _discountService = discountService;
        }

        [HttpPost(Name = "AddDiscount")]
        public async Task AddDiscount(DiscountCreationModel requestModel)
        {
            await _discountService.AddDiscountAsync(requestModel);
        }
    }
}
