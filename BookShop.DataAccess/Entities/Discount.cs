using BookShop.DataAccess.Entities.Base;
using System;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class Discount : BaseEntity
    {
        public string Description { get; set; }
        public int DiscountSize { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public DiscountType DiscountType { get; set; }
    }
}
