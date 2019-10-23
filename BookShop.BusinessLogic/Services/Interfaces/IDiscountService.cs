using BookShop.BusinessLogic.Models.DiscountModels;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IDiscountService
    {
        Task AddDiscountAsync(DiscountCreationModel requestModel);
        Task<DiscountResponseModel> GetDiscountsAsync(DiscountRequestModel requestModel);
    }
}
