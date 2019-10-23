using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.DiscountModels
{
    public class DiscountResponseModel
    {
        public int Count { get; set; }
        public List<DiscountModel> DiscountModels { get; set; }

        public DiscountResponseModel()
        {
            DiscountModels = new List<DiscountModel>();
        }
    }
}
