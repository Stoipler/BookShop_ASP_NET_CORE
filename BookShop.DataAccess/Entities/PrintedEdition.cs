using System.Collections.Generic;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class PrintedEdition: BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public Status Status { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        public List<AuthorInBook> AuthorInBooks { get; set; }
    }
}
