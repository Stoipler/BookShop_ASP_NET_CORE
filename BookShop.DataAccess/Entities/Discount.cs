using BookShop.DataAccess.Entities.Base;
using System;

namespace BookShop.DataAccess.Entities
{
    public class Discount : BaseEntity
    {
        public int DiscountSize { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime ExpirationDate { get; set; }
    }
}
