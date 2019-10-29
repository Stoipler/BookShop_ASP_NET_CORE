using BookShop.DataAccess.Entities.Base;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class PrintedEdition : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal DiscountPrice { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }
    }
}
