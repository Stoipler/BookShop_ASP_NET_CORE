using BookShop.DataAccess.Entities.Interfaces;
using System;

namespace BookShop.DataAccess.Entities
{
    public class Order: IBaseEntity
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public int PaymentId { get; set; }
        private DateTime _creationDate;
        public DateTime CreationDate
        {
            get
            {
                return _creationDate;
            }
            set
            {
                _creationDate = DateTime.Now;
            }
        }
        public bool IsRemoved { get; set; }
    }
}
