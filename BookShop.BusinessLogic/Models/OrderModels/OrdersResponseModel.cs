using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class OrdersResponseModel
    {
        public int Count { get; set; }
        public List<OrderModel> OrderModels;

        public OrdersResponseModel()
        {
            Count = 0;
            OrderModels = new List<OrderModel>();
        }
    }
}
