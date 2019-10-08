namespace BookShop.DataAccess.Entities
{
    public class Order : BaseEntity
    {
        public int ApplicationUserId { get; set; }
        public string Description { get; set; }
        public decimal OrderAmount { get; set; }
    }
}
