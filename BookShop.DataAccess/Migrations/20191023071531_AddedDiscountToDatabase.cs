using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookShop.DataAccess.Migrations
{
    public partial class AddedDiscountToDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DiscountId",
                table: "PrintedEditions",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Discounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    DiscountSize = table.Column<int>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Discounts", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9502));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9503));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9504));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9505));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9506));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9507));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9301));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9302));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9303));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreationDate", "Name" },
                values: new object[] { new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9304), "Some author" });

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9305));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9305));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9306));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9431));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9437));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9439));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9440));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9441));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9481));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9483));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9484));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9485));

            migrationBuilder.CreateIndex(
                name: "IX_PrintedEditions_DiscountId",
                table: "PrintedEditions",
                column: "DiscountId");

            migrationBuilder.AddForeignKey(
                name: "FK_PrintedEditions_Discounts_DiscountId",
                table: "PrintedEditions",
                column: "DiscountId",
                principalTable: "Discounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PrintedEditions_Discounts_DiscountId",
                table: "PrintedEditions");

            migrationBuilder.DropTable(
                name: "Discounts");

            migrationBuilder.DropIndex(
                name: "IX_PrintedEditions_DiscountId",
                table: "PrintedEditions");

            migrationBuilder.DropColumn(
                name: "DiscountId",
                table: "PrintedEditions");

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6048));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6050));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6051));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6051));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6052));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6053));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(5879));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(5881));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(5882));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreationDate", "Name" },
                values: new object[] { new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(5882), "William Shaekspeare" });

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(5883));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(5884));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(5885));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6019));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6022));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6025));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6026));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6027));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6028));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6029));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6030));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 21, 11, 49, 14, 947, DateTimeKind.Utc).AddTicks(6031));
        }
    }
}
