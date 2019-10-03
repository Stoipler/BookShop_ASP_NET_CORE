namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class CheckoutItemModel
    {
        public int PrintedEditionId { get; set; }
        public string PrintedEditionName { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal OrderAmount { get; set; }
    }
}