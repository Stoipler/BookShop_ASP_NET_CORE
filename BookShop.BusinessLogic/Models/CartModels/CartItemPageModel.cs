using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.CartModels
{
    public class CartItemPageModel
    {
        public List<CartItemModel> CartItemModels { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
