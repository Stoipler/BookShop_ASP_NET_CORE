using BookShop.BusinessLogic.PrintedEditionModels;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.DiscountWithNestedObjects;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public List<PrintedEditionModel> PrintedEditionModels { get; set; }

        public DiscountModel()
        {
            PrintedEditionModels = new List<PrintedEditionModel>();

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
        internal DiscountModel(DiscountWithNestedObjects discountWithNestedObjects) : this(discountWithNestedObjects.Discount)
        {
            bool condition = !(discountWithNestedObjects.PrintedEditions is null) && discountWithNestedObjects.PrintedEditions.Any();
            if (condition)
            {
                PrintedEditionModels = discountWithNestedObjects.PrintedEditions.Select(item => new PrintedEditionModel(item)).ToList();
            }
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
