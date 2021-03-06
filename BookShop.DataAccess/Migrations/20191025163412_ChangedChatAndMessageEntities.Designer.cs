﻿// <auto-generated />
using System;
using BookShop.DataAccess.AppContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BookShop.DataAccess.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20191025163412_ChangedChatAndMessageEntities")]
    partial class ChangedChatAndMessageEntities
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BookShop.DataAccess.Entities.ApplicationUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FirstName");

                    b.Property<bool>("IsRemoved");

                    b.Property<string>("LastName");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.Author", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreationDate");

                    b.Property<bool>("IsRemoved");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Authors");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8713),
                            IsRemoved = false,
                            Name = "Joan Rowling"
                        },
                        new
                        {
                            Id = 2,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8715),
                            IsRemoved = false,
                            Name = "J.R. Martin"
                        },
                        new
                        {
                            Id = 3,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8716),
                            IsRemoved = false,
                            Name = "William Shaekspeare"
                        },
                        new
                        {
                            Id = 4,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8716),
                            IsRemoved = false,
                            Name = "Some author"
                        },
                        new
                        {
                            Id = 5,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8717),
                            IsRemoved = false,
                            Name = "Lev Tolstoy"
                        },
                        new
                        {
                            Id = 6,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8718),
                            IsRemoved = false,
                            Name = "Incognito"
                        },
                        new
                        {
                            Id = 7,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8719),
                            IsRemoved = false,
                            Name = "Stan Lee"
                        });
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.AuthorInBook", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AuthorId");

                    b.Property<DateTime>("CreationDate");

                    b.Property<bool>("IsRemoved");

                    b.Property<int>("PrintedEditionId");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("PrintedEditionId");

                    b.ToTable("AuthorInBooks");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AuthorId = 1,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8916),
                            IsRemoved = false,
                            PrintedEditionId = 1
                        },
                        new
                        {
                            Id = 2,
                            AuthorId = 2,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8917),
                            IsRemoved = false,
                            PrintedEditionId = 2
                        },
                        new
                        {
                            Id = 3,
                            AuthorId = 3,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8918),
                            IsRemoved = false,
                            PrintedEditionId = 3
                        },
                        new
                        {
                            Id = 4,
                            AuthorId = 4,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8918),
                            IsRemoved = false,
                            PrintedEditionId = 4
                        },
                        new
                        {
                            Id = 5,
                            AuthorId = 5,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8919),
                            IsRemoved = false,
                            PrintedEditionId = 5
                        },
                        new
                        {
                            Id = 6,
                            AuthorId = 6,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8920),
                            IsRemoved = false,
                            PrintedEditionId = 6
                        });
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.Chat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreationDate");

                    b.Property<bool>("IsRemoved");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Chats");
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ChatId");

                    b.Property<string>("Content");

                    b.Property<DateTime>("CreationDate");

                    b.Property<bool>("IsRemoved");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ApplicationUserId");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Description");

                    b.Property<bool>("IsRemoved");

                    b.Property<decimal>("OrderAmount");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationUserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.OrderItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Amount");

                    b.Property<int>("Count");

                    b.Property<DateTime>("CreationDate");

                    b.Property<int>("Currency");

                    b.Property<bool>("IsRemoved");

                    b.Property<int>("PrintedEditionId");

                    b.HasKey("Id");

                    b.HasIndex("PrintedEditionId");

                    b.ToTable("OrderItems");
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreationDate");

                    b.Property<bool>("IsRemoved");

                    b.Property<int>("TransactionId");

                    b.HasKey("Id");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.PrintedEdition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreationDate");

                    b.Property<int>("Currency");

                    b.Property<string>("Description");

                    b.Property<bool>("IsRemoved");

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("PrintedEditions");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8887),
                            Currency = 1,
                            Description = "About boy who lived",
                            IsRemoved = false,
                            Name = "Harry Potter",
                            Price = 100m,
                            Type = 1
                        },
                        new
                        {
                            Id = 2,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8890),
                            Currency = 1,
                            Description = "Origin of the Game of trones",
                            IsRemoved = false,
                            Name = "Song of ice and fire",
                            Price = 70.52m,
                            Type = 1
                        },
                        new
                        {
                            Id = 3,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8892),
                            Currency = 1,
                            Description = "Historical novel",
                            IsRemoved = false,
                            Name = "War and peace",
                            Price = 78.52m,
                            Type = 1
                        },
                        new
                        {
                            Id = 4,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8893),
                            Currency = 1,
                            Description = "New York newspaper",
                            IsRemoved = false,
                            Name = "Times",
                            Price = 12.30m,
                            Type = 3
                        },
                        new
                        {
                            Id = 5,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8894),
                            Currency = 1,
                            Description = "Not book",
                            IsRemoved = false,
                            Name = "Shrek",
                            Price = 23.70m,
                            Type = 1
                        },
                        new
                        {
                            Id = 6,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8895),
                            Currency = 1,
                            Description = "Comics",
                            IsRemoved = false,
                            Name = "The Simpsons",
                            Price = 15.00m,
                            Type = 2
                        },
                        new
                        {
                            Id = 7,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8896),
                            Currency = 1,
                            Description = "Superhero tales",
                            IsRemoved = false,
                            Name = "The amazing Spider-Man",
                            Price = 18.00m,
                            Type = 2
                        },
                        new
                        {
                            Id = 8,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8897),
                            Currency = 1,
                            Description = "Science news",
                            IsRemoved = false,
                            Name = "Electronics today",
                            Price = 5.00m,
                            Type = 3
                        },
                        new
                        {
                            Id = 9,
                            CreationDate = new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8898),
                            Currency = 1,
                            Description = "Computer Journal",
                            IsRemoved = false,
                            Name = "Wired",
                            Price = 5.00m,
                            Type = 2
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.AuthorInBook", b =>
                {
                    b.HasOne("BookShop.DataAccess.Entities.Author", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("BookShop.DataAccess.Entities.PrintedEdition", "PrintedEdition")
                        .WithMany()
                        .HasForeignKey("PrintedEditionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.Order", b =>
                {
                    b.HasOne("BookShop.DataAccess.Entities.ApplicationUser", "ApplicationUser")
                        .WithMany()
                        .HasForeignKey("ApplicationUserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BookShop.DataAccess.Entities.OrderItem", b =>
                {
                    b.HasOne("BookShop.DataAccess.Entities.PrintedEdition", "PrintedEdition")
                        .WithMany()
                        .HasForeignKey("PrintedEditionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole<int>")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("BookShop.DataAccess.Entities.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("BookShop.DataAccess.Entities.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<int>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole<int>")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("BookShop.DataAccess.Entities.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("BookShop.DataAccess.Entities.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
