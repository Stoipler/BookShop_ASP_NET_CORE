using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.BusinessLogic.Initialization
{
    public class IdentityInitalization
    {
        public async static void Seed(IServiceProvider provider)
        {
            ApplicationContext _context = provider.GetRequiredService<ApplicationContext>();
            UserManager<ApplicationUser> _userManager = provider.GetRequiredService<UserManager<ApplicationUser>>();
            int count = _context.Users.Count();
            if (count!=0)
            {
                return;
            }
            ApplicationUser admin = new ApplicationUser
            {
                FirstName = "Admin",
                LastName = "Admin",
                UserName = "admin@email.com",
                Email = "admin@email.com",
                EmailConfirmed = true
            };
            string adminPassword = "Admin2019";
            await _userManager.CreateAsync(admin, adminPassword);
        }
    }
}
