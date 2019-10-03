using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class CartResponseModel
    {
        public List<CheckoutItemModel> CheckoutItemModels { get; set; }
        public decimal TotalPrice { get; set; }
        public CartResponseModel()
        {
            CheckoutItemModels = new List<CheckoutItemModel>();
        }
    }
}
