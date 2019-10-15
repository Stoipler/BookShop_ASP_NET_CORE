using BookShop.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Infrastructure.Internal;

namespace BookShop.DataAccess.AppContext
{
    public class ApplicationContext : IdentityDbContext<ApplicationUser, IdentityRole<int>, int>
    {
        private string _connectionString { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<AuthorInBook> AuthorInBooks { get; set; }
        public DbSet<PrintedEdition> PrintedEditions { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            var sqlServerOptionsExtension =
                   options.FindExtension<SqlServerOptionsExtension>();
            if (!(sqlServerOptionsExtension is null))
            {
                _connectionString = sqlServerOptionsExtension.ConnectionString;
            }
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AuthorInBook>()
                .HasOne(entity => entity.Author);
            modelBuilder.Entity<AuthorInBook>()
               .HasOne(entity => entity.PrintedEdition);
            Initialization.InitialData.Seed(modelBuilder);
        }
    }
}
