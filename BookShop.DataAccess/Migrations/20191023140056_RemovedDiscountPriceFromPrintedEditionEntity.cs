using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookShop.DataAccess.Migrations
{
    public partial class RemovedDiscountPriceFromPrintedEditionEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiscountPrice",
                table: "PrintedEditions");

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6259));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6261));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6261));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6262));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6263));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6264));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6044));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6045));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6046));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6047));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6048));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6048));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6049));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6228));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6232));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6233));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6234));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6235));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6236));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6237));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6239));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 23, 14, 0, 56, 341, DateTimeKind.Utc).AddTicks(6240));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "DiscountPrice",
                table: "PrintedEditions",
                nullable: false,
                defaultValue: 0m);

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
    }
}
