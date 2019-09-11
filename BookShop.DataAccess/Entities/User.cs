using System;
using BookShop.DataAccess.Entities.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace BookShop.DataAccess.Entities
{
    public class ApplicationUser : IdentityUser<int>, IBaseEntity
    {
        
        public string FirstName { get; set; }
        public string LastName { get; set; }

        private DateTime _creationDate;
        public DateTime CreationDate {
            get
            {
                return _creationDate;
            }
            set
            {
                _creationDate = DateTime.Now;
            }
        }
        public bool IsRemoved { get ; set ; }
    }
}
