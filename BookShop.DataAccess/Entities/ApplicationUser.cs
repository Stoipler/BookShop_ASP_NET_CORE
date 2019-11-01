using AspNetCore.Identity.MongoDbCore.Models;
using BookShop.DataAccess.Entities.Interfaces;
using Dapper.Contrib.Extensions;
using MongoDbGenericRepository.Attributes;
using System;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("ApplicationUsers")]
    [Table("AspNetUsers")]
    public class ApplicationUser : MongoIdentityUser<string>, IBaseEntity
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
