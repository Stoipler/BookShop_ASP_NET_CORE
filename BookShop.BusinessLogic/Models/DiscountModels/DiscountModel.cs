using BookShop.DataAccess.Entities;
using System;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.BusinessLogic.Models.DiscountModels
{
    public class DiscountModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int DiscountSize { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsRemoved { get; set; }
        public DiscountType DiscountType { get; set; }

        public DiscountModel()
        {

        }

        internal DiscountModel(Discount entity) : this()
        {
            Id = entity.Id;
            Description = entity.Description;
            DiscountSize = entity.DiscountSize;
            StartDate = entity.StartDate;
            ExpirationDate = entity.ExpirationDate;
            DiscountType = entity.DiscountType;
            CreationDate = entity.CreationDate;
            IsRemoved = entity.IsRemoved;
        }

        internal Discount MapToEntity(Discount entity)
        {
            entity.Id = Id;
            entity.Description = Description;
            entity.DiscountSize = DiscountSize;
            entity.StartDate = StartDate;
            entity.ExpirationDate = ExpirationDate;
            entity.DiscountType = DiscountType;
            return entity;
        }
    }
}
