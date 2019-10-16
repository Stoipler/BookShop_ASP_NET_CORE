using BookShop.DataAccess.Entities;
using System;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class OrderModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public decimal OrderAmount { get; set; }
        public DateTime CreationDate { get; set; }
        public OrderModel()
        {

        }
        internal OrderModel(Order entity) : this()
        {
            Id = entity.Id;
            Description = entity.Description;
            OrderAmount = entity.OrderAmount;
            CreationDate = entity.CreationDate;
            Email = entity.ApplicationUser.Email;
            FirstName = entity.ApplicationUser.FirstName;
            LastName = entity.ApplicationUser.LastName;
        }
    }
}
