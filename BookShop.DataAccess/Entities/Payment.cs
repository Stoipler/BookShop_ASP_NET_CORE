using BookShop.DataAccess.Entities.Interfaces;

namespace BookShop.DataAccess.Entities
{
    public class Payment: IBaseEntity
    {
        public int Id { get; set; }
        public int TransactionId { get; set; }
    }
}
