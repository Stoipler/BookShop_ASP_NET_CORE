using BookShop.DataAccess.Entities;
using System;

namespace BookShop.BusinessLogic.Models.DiscountModels
{
    public class DiscountModel
    {
        public int Id { get; set; }
        public int DiscountSize { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsRemoved { get; set; }

        public DiscountModel()
        {

        }

        internal DiscountModel(Discount entity) : this()
        {
            Id = entity.Id;
            DiscountSize = entity.DiscountSize;
            CreationDate = entity.CreationDate;
            IsRemoved = entity.IsRemoved;
        }

        internal Discount MapToEntity(Discount entity)
        {
            entity.Id = Id;
            entity.DiscountSize = DiscountSize;
            return entity;
        }
    }
}
