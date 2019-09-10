using BookShop.DataAccess.Entities.Interfaces;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class OrderItem:IBaseEntity
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public Currency Currency { get; set; }
        public int PrintedEditionId { get; set; }
        public int Count { get; set; }
    }
}
