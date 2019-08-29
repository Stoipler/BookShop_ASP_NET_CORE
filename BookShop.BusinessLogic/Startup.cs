using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Services;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace BookShop.BusinessLogic
{
    public class Startup
    {
        public static void OnLoad(IConfiguration configuration ,string connectionString, IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(configuration.GetConnectionString("ApplicationDb")));
            
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<EmailService>();
        }
    }
}
