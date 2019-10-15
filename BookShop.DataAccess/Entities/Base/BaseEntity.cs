using BookShop.DataAccess.Entities.Interfaces;
using System;

namespace BookShop.DataAccess.Entities.Base
{
    public class BaseEntity : IBaseEntity
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsRemoved { get; set; }
        public BaseEntity()
        {
            CreationDate = DateTime.UtcNow;
        }
    }
}
