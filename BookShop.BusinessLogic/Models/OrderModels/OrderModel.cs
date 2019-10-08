using BookShop.DataAccess.Entities;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class OrderModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal OrderAmount { get; set; }
        public OrderModel()
        {

        }
        public OrderModel(Order entity)
        {
            Id = entity.Id;
            Description = entity.Description;
            OrderAmount = entity.OrderAmount;
        }
    }
}
