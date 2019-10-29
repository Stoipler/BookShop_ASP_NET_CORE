using BookShop.DataAccess.Entities.Interfaces;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Identity;
using System;

namespace BookShop.DataAccess.Entities
{
    [Table("AspNetUsers")]
    public class ApplicationUser : IdentityUser<string>, IBaseEntity
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
