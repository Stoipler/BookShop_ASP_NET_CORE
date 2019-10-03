using System;
using System.Collections.Generic;
using System.Text;

namespace BookShop.BusinessLogic.Models.CartModels
{

    public class CartListRequestModel
    {
        List<CartListItemModel> CartItems { get; set; }
    }
    public class CartListItemModel
    {
            public int Quantity { get; set; }
            public int PrintedEditionId { get; set; }
            public decimal Price { get; set; }
            public decimal OrderAmount { get; set; }
    }
}
