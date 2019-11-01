using BookShop.DataAccess.Entities.Base;
using MongoDbGenericRepository.Attributes;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("Payments")]
    public class Payment : BaseEntity
    {
        public string TransactionId { get; set; }
    }
}
