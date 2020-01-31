using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookShop.DataAccess.Migrations
{
    public partial class UpdatedChatEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MessageId",
                table: "Chats",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2130));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2132));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2133));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2134));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2136));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2137));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(1908));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(1909));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(1910));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(1911));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(1912));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(1912));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(1913));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2095));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2100));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2102));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2104));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2106));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2107));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2108));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2109));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 28, 8, 16, 54, 263, DateTimeKind.Utc).AddTicks(2111));

            migrationBuilder.CreateIndex(
                name: "IX_Chats_MessageId",
                table: "Chats",
                column: "MessageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Chats_Messages_MessageId",
                table: "Chats",
                column: "MessageId",
                principalTable: "Messages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chats_Messages_MessageId",
                table: "Chats");

            migrationBuilder.DropIndex(
                name: "IX_Chats_MessageId",
                table: "Chats");

            migrationBuilder.DropColumn(
                name: "MessageId",
                table: "Chats");

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8916));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8917));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8918));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8918));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8919));

            migrationBuilder.UpdateData(
                table: "AuthorInBooks",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8920));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8713));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8715));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8716));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8716));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8717));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8718));

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8719));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8887));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8890));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8892));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8893));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8894));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8895));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 7,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8896));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 8,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8897));

            migrationBuilder.UpdateData(
                table: "PrintedEditions",
                keyColumn: "Id",
                keyValue: 9,
                column: "CreationDate",
                value: new DateTime(2019, 10, 25, 16, 34, 12, 309, DateTimeKind.Utc).AddTicks(8898));
        }
    }
}
