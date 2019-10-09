using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class AdminOrdersResponseModel
    {
        public PageModel PageModel { get; set; }
        public List<OrderModel> OrderModels { get; set; }
    }
}
