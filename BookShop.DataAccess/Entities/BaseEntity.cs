using BookShop.DataAccess.Entities.Interfaces;
using System;
using System.ComponentModel.DataAnnotations;

namespace BookShop.DataAccess.Entities
{
    public class BaseEntity : IBaseEntity
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsRemoved { get; set; }

        public BaseEntity()
        {
            CreationDate = DateTime.UtcNow;
        }
    }
}
