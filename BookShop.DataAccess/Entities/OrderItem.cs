using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using MongoDbGenericRepository.Attributes;
using System.ComponentModel.DataAnnotations.Schema;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("OrderItems")]
    public class OrderItem : BaseEntity
    {
        public decimal Amount { get; set; }
        public Currency Currency { get; set; }
        public int Count { get; set; }
        [ForeignKey("PrintedEdition")]
        public string PrintedEditionId { get; set; }
        [Computed]
        public PrintedEdition PrintedEdition { get; set; }
    }
}
