using BookShop.DataAccess.Entities.Base;

namespace BookShop.DataAccess.Entities
{
    public class Payment : BaseEntity
    {
        public string TransactionId { get; set; }
    }
}
