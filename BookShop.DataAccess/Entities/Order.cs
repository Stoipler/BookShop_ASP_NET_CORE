using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using MongoDbGenericRepository.Attributes;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("Orders")]
    public class Order : BaseEntity
    {
        [ForeignKey("ApplicationUser")]
        public string ApplicationUserId { get; set; }
        [Computed]
        public ApplicationUser ApplicationUser { get; set; }
        public string Description { get; set; }
        public decimal OrderAmount { get; set; }
    }
}
