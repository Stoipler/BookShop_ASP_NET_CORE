using BookShop.DataAccess.Entities;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.BusinessLogic.Models
{
    public class OrderItemModel
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public Currency Currency { get; set; }
        public int PrintedEditionId { get; set; }
        public int Count { get; set; }

        internal void MapToModel(OrderItem entity)
        {
            Id = entity.Id;
            Amount = entity.Amount;
            Currency = entity.Currency;
            PrintedEditionId = entity.PrintedEditionId;
            Count = entity.Count;
        }
        internal OrderItem MapToEntity(OrderItem entity)
        {
            entity.Amount = Id;
            entity.Currency = Currency;
            entity.PrintedEditionId = PrintedEditionId;
            entity.Count = Count;
            return entity;
        }
    }
}
