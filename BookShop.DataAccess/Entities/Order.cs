using System;

namespace BookShop.DataAccess.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public int PaymentId { get; set; }
    }
}
