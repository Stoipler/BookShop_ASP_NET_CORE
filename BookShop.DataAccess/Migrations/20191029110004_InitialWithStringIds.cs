using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookShop.DataAccess.Migrations
{
    public partial class InitialWithStringIds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    TransactionId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PrintedEditions",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    Currency = table.Column<int>(nullable: false),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrintedEditions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    ApplicationUserId = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    OrderAmount = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AuthorInBooks",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    AuthorId = table.Column<string>(nullable: true),
                    PrintedEditionId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuthorInBooks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AuthorInBooks_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AuthorInBooks_PrintedEditions_PrintedEditionId",
                        column: x => x.PrintedEditionId,
                        principalTable: "PrintedEditions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrderItems",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    Amount = table.Column<decimal>(nullable: false),
                    Currency = table.Column<int>(nullable: false),
                    Count = table.Column<int>(nullable: false),
                    PrintedEditionId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItems_PrintedEditions_PrintedEditionId",
                        column: x => x.PrintedEditionId,
                        principalTable: "PrintedEditions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "CreationDate", "IsRemoved", "Name" },
                values: new object[,]
                {
                    { "1", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8001), false, "Joan Rowling" },
                    { "2", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8002), false, "J.R. Martin" },
                    { "3", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8003), false, "William Shaekspeare" },
                    { "4", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8004), false, "Some author" },
                    { "5", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8005), false, "Lev Tolstoy" },
                    { "6", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8005), false, "Incognito" },
                    { "7", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8006), false, "Stan Lee" }
                });

            migrationBuilder.InsertData(
                table: "PrintedEditions",
                columns: new[] { "Id", "CreationDate", "Currency", "Description", "IsRemoved", "Name", "Price", "Type" },
                values: new object[,]
                {
                    { "1", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8178), 1, "About boy who lived", false, "Harry Potter", 100m, 1 },
                    { "2", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8181), 1, "Origin of the Game of trones", false, "Song of ice and fire", 70.52m, 1 },
                    { "3", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8182), 1, "Historical novel", false, "War and peace", 78.52m, 1 },
                    { "4", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8183), 1, "New York newspaper", false, "Times", 12.30m, 3 },
                    { "5", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8184), 1, "Not book", false, "Shrek", 23.70m, 1 },
                    { "6", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8185), 1, "Comics", false, "The Simpsons", 15.00m, 2 },
                    { "7", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8187), 1, "Superhero tales", false, "The amazing Spider-Man", 18.00m, 2 },
                    { "8", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8188), 1, "Science news", false, "Electronics today", 5.00m, 3 },
                    { "9", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8189), 1, "Computer Journal", false, "Wired", 5.00m, 2 }
                });

            migrationBuilder.InsertData(
                table: "AuthorInBooks",
                columns: new[] { "Id", "AuthorId", "CreationDate", "IsRemoved", "PrintedEditionId" },
                values: new object[,]
                {
                    { "1", "1", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8207), false, "1" },
                    { "2", "2", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8212), false, "2" },
                    { "3", "3", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8213), false, "3" },
                    { "4", "4", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8214), false, "4" },
                    { "5", "5", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8215), false, "5" },
                    { "6", "6", new DateTime(2019, 10, 29, 11, 0, 4, 511, DateTimeKind.Utc).AddTicks(8216), false, "6" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AuthorInBooks_AuthorId",
                table: "AuthorInBooks",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_AuthorInBooks_PrintedEditionId",
                table: "AuthorInBooks",
                column: "PrintedEditionId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_PrintedEditionId",
                table: "OrderItems",
                column: "PrintedEditionId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ApplicationUserId",
                table: "Orders",
                column: "ApplicationUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "AuthorInBooks");

            migrationBuilder.DropTable(
                name: "OrderItems");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Authors");

            migrationBuilder.DropTable(
                name: "PrintedEditions");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
