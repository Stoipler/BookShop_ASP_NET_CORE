using System;
using BookShop.DataAccess.Entities.Interfaces;

namespace BookShop.DataAccess.Entities
{
    public class Author:IBaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
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
