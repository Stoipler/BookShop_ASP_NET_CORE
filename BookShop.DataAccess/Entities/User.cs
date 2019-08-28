using Microsoft.AspNetCore.Identity;

namespace BookShop.DataAccess.Entities
{
    public class User:IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
