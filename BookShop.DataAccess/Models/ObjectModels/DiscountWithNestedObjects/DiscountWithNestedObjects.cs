using BookShop.DataAccess.Entities;
using System.Collections.Generic;

namespace BookShop.DataAccess.Models.ObjectModels.DiscountWithNestedObjects
{
    public class DiscountWithNestedObjects
    {
        public Discount Discount { get; set; }
        public List<PrintedEdition> PrintedEditions { get; set; }
    }
}
