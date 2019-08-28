using BookShop.DataAccess.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Infrastructure.Internal;


namespace BookShop.DataAccess.AppContext
{
    public class ApplicationContext:IdentityDbContext<User>
    {
        private string _connectionString { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options) {
            
            var sqlServerOptionsExtension =
                   options.FindExtension<SqlServerOptionsExtension>();
            if (sqlServerOptionsExtension != null)
            {
                _connectionString = sqlServerOptionsExtension.ConnectionString;
            }

            Database.Migrate();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
