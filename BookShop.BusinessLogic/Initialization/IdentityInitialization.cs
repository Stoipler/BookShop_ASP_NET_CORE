using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using static BookShop.DataAccess.Common.Constants;

namespace BookShop.BusinessLogic.Initialization
{
    public class IdentityInitalization
    {
        public async static void Seed(IServiceProvider provider)
        {
            ApplicationContext _context = provider.GetRequiredService<ApplicationContext>();
            UserManager<ApplicationUser> _userManager = provider.GetRequiredService<UserManager<ApplicationUser>>();
            RoleManager<IdentityRole<string>> _roleManager = provider.GetRequiredService<RoleManager<IdentityRole<string>>>();
            if (await _roleManager.FindByNameAsync("admin") is null)
            {
                await _roleManager.CreateAsync(new IdentityRole<string>("admin"));
            }

            if (!(await _userManager.FindByNameAsync(AdminCredentials.UserName) is null))
            {
                return;
            }
            ApplicationUser admin = new ApplicationUser
            {
                FirstName = AdminCredentials.FirstName,
                LastName = AdminCredentials.LastName,
                UserName = AdminCredentials.UserName,
                Email = AdminCredentials.Email,
                EmailConfirmed = true
            };
            string adminPassword = AdminCredentials.NotHashedPassword;
            IdentityResult result = await _userManager.CreateAsync(admin, adminPassword);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(admin, "admin");
            }
        }
    }
}
