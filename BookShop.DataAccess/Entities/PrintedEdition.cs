using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations.Schema;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class PrintedEdition : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }
        [ForeignKey("Discount")]
        public int? DiscountId { get; set; }
        [Computed]
        public Discount Discount { get; set; }
    }
}
