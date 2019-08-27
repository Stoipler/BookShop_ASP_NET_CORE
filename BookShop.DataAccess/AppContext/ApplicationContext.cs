using BookShop.DataAccess.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BookShop.DataAccess.AppContext
{
    public class ApplicationContext:IdentityDbContext<ApplicationUser>
    {
    }
}
