using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Services;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Stripe;
using AccountService = BookShop.BusinessLogic.Services.AccountService;
using OrderService = BookShop.BusinessLogic.Services.OrderService;

namespace BookShop.BusinessLogic
{
    public static class DependencyInjection
    {
        public static void ServicesInjection(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(configuration.GetConnectionString("ApplicationDb")));
            services.AddIdentity<ApplicationUser, IdentityRole<int>>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();

            services.AddTransient<EmailHelper>();
            services.AddTransient<JwtHelper>();
            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();

            services.AddTransient<IPrintedEditionRepository, PrintedEditionRepository>();
            services.AddTransient<IAuthorInBookRepository, AuthorInBookRepository>();
            services.AddTransient<IOrderRepository, OrderRepository>();
            services.AddTransient<IAuthorRepository, AuthorRepository>();
            services.AddTransient<IUserRepository, UserRepository>();

            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IAuthorService, AuthorService>();
            services.AddTransient<IOrderService, OrderService>();
            services.AddTransient<IPrintedEditionService, PrintedEditionService>();

            services.AddTransient<CustomerService>();
            services.AddTransient<ChargeService>();

            ServiceProvider serviceProvider = services.BuildServiceProvider();
            Initialization.IdentityInitalization.Seed(serviceProvider);
        }
    }
}
