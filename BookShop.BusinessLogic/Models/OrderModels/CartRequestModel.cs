using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class CartRequestModel
    {
        [Required]
        public List<CartItemModel> CartItemModels { get; set; }
    }
}
