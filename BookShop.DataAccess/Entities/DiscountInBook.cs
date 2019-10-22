using BookShop.DataAccess.Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    public class DiscountInBook : BaseEntity
    {
        [ForeignKey("Discount")]
        public int DiscountId { get; set; }
        public Discount Discount { get; set; }
        [ForeignKey("PrintedEdition")]
        public int PrintedEditionId { get; set; }
        public PrintedEdition PrintedEdition { get; set; }
    }
}
