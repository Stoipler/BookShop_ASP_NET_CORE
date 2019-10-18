using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    public class Order : BaseEntity
    {
        [ForeignKey("ApplicationUser")]
        public int ApplicationUserId { get; set; }
        [Computed]
        public ApplicationUser ApplicationUser { get; set; }
        public string Description { get; set; }
        public decimal OrderAmount { get; set; }
    }
}
