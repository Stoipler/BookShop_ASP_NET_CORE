using BookShop.DataAccess.Entities.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;

namespace BookShop.DataAccess.Entities
{
    public class ApplicationUser : IdentityUser<int>, IBaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsRemoved { get; set; }
        public ApplicationUser()
        {
            CreationDate = DateTime.Now;
        }
    }
}
