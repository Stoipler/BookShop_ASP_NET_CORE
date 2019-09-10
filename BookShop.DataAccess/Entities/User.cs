using BookShop.DataAccess.Entities.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace BookShop.DataAccess.Entities
{
    public class ApplicationUser : IdentityUser<int>, IBaseEntity
    {
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
