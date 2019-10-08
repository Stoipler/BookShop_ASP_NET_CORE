using System;
using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class UserOrdersModel
    {

        public List<OrderModel> OrderModels;

        public UserOrdersModel()
        {
            OrderModels = new List<OrderModel>();
        }
    }
}
