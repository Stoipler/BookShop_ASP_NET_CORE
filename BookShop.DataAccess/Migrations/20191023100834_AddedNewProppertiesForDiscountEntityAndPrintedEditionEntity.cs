using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookShop.DataAccess.Migrations
{
    public partial class AddedNewProppertiesForDiscountEntityAndPrintedEditionEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "DiscountPrice",
                table: "PrintedEditions",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Discounts",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DiscountType",
                table: "Discounts",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7295));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7297));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7297));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7298));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7299));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7300));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7052));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7054));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7055));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7055));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7056));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7060));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7062));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7265));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7268));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7270));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7271));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7272));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7273));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7274));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7275));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 10, 8, 34, 675, DateTimeKind.Utc).AddTicks(7276));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiscountPrice",
                table: "PrintedEditions");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Discounts");

            migrationBuilder.DropColumn(
                name: "DiscountType",
                table: "Discounts");

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
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 7, 15, 31, 632, DateTimeKind.Utc).AddTicks(9304));

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
        }
    }
}
