using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace BookShop.BusinessLogic.Initialization
{
    public class IdentityInitalization
    {
        public async static void Seed(IServiceProvider provider)
        {
            ApplicationContext _context = provider.GetRequiredService<ApplicationContext>();
            UserManager<ApplicationUser> _userManager = provider.GetRequiredService<UserManager<ApplicationUser>>();
            RoleManager<IdentityRole<int>> _roleManager = provider.GetRequiredService<RoleManager<IdentityRole<int>>>();
            if (await _roleManager.FindByNameAsync("admin") is null)
            {
                await _roleManager.CreateAsync(new IdentityRole<int>("admin"));
            }

            if (!(await _userManager.FindByEmailAsync("admin@email.com") is null))
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
            IdentityResult result = await _userManager.CreateAsync(admin, adminPassword);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(admin, "admin");
            }
        }
    }
}
