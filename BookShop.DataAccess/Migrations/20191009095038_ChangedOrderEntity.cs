using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace BookShop.DataAccess.Migrations
{
    public partial class ChangedOrderEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7854));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7856));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7857));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7857));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7858));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7859));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7641));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7643));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7644));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7681));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7682));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7683));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7683));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7823));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7829));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7831));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7832));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7833));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7834));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7835));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7836));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 9, 9, 50, 38, 831, DateTimeKind.Utc).AddTicks(7837));

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ApplicationUserId",
                table: "Orders",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_AspNetUsers_ApplicationUserId",
                table: "Orders",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_AspNetUsers_ApplicationUserId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_ApplicationUserId",
                table: "Orders");

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6713));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6714));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6715));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6752));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6752));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6753));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6546));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6548));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6549));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6550));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6550));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6551));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6552));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6687));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6689));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6691));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6692));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6693));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6694));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6696));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6697));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 8, 16, 20, 32, 339, DateTimeKind.Utc).AddTicks(6698));
        }
    }
}
