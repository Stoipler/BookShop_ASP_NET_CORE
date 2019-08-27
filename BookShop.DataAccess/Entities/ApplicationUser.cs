using Microsoft.AspNetCore.Identity;

namespace BookShop.DataAccess.Entities
{
    public class ApplicationUser:IdentityUser
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }
}
