using BookShop.BusinessLogic.Common;
using BookShop.BusinessLogic.Services;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDbGenericRepository;
using Stripe;
using System;
using AccountService = BookShop.BusinessLogic.Services.AccountService;
using OrderService = BookShop.BusinessLogic.Services.OrderService;

namespace BookShop.BusinessLogic
{
    public static class DependencyInjection
    {
        public static void ServicesInjection(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(configuration.GetConnectionString("ApplicationDb")));
            services.AddIdentity<ApplicationUser, IdentityRole<string>>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();

            Environment.SetEnvironmentVariable("SendGridApiKey", configuration.GetSection("SendGridMailCredentials").GetSection("Api_Key").Value);
            Environment.SetEnvironmentVariable("SendGridEmail", configuration.GetSection("SendGridMailCredentials").GetSection("BookshopEmail").Value);
            Environment.SetEnvironmentVariable("SendGridSenderName", configuration.GetSection("SendGridMailCredentials").GetSection("BookshopSenderName").Value);

            services.AddTransient<EmailHelper>();
            services.AddTransient<JwtHelper>();
            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();

            //InjectDapperRepositories(services);
            InjectEntityFrameworkRepositories(services);

            MongoDbInjection(services, configuration);

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

        private static void InjectEntityFrameworkRepositories(IServiceCollection services)
        {
            services.AddTransient<IAuthorRepository, BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.AuthorRepository>();
            services.AddTransient<IOrderRepository, BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.OrderRepository>();
            services.AddTransient<IPrintedEditionRepository, BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.PrintedEditionRepository>();
            services.AddTransient<IAuthorInBookRepository, BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.AuthorInBookRepository>();
            services.AddTransient<IUserRepository, BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.UserRepository>();
        }

        private static void MongoDbInjection(IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetSection("MongoDbSettings").GetSection("ConnectionString").Value;
            string databaseName = configuration.GetSection("MongoDbSettings").GetSection("DatabaseName").Value;
            var mongoDbContext = new MongoDbContext(connectionString, databaseName);
            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddMongoDbStores<MongoDbContext>(mongoDbContext)
                .AddDefaultTokenProviders();
        }

        //private static void InjectDapperRepositories(IServiceCollection services)
        //{
        //    services.AddTransient<IAuthorRepository, BookShop.DataAccess.Repostories.DapperRepositories.AuthorRepository>();
        //    services.AddTransient<IOrderRepository, BookShop.DataAccess.Repostories.DapperRepositories.OrderRepository>();
        //    services.AddTransient<IPrintedEditionRepository, BookShop.DataAccess.Repostories.DapperRepositories.PrintedEditionRepository>();
        //    services.AddTransient<IAuthorInBookRepository, BookShop.DataAccess.Repostories.DapperRepositories.AuthorInBookRepository>();
        //    services.AddTransient<IUserRepository, BookShop.DataAccess.Repostories.DapperRepositories.UserRepository>();
        //}

    }
}
