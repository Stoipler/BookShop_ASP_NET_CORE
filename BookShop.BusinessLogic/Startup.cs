using BookShop.BusinessLogic.Services;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;


namespace BookShop.BusinessLogic
{
    public class Startup
    {
        public static void OnLoad(string connectionString, IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connectionString));
            
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserRepository, UserRepository>();
        }
    }
}
