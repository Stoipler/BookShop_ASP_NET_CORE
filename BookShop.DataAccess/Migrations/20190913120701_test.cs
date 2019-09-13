using Microsoft.EntityFrameworkCore.Migrations;

namespace BookShop.DataAccess.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PrintedEditionId",
                table: "Authors",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Authors_PrintedEditionId",
                table: "Authors",
                column: "PrintedEditionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Authors_PrintedEditions_PrintedEditionId",
                table: "Authors",
                column: "PrintedEditionId",
                principalTable: "PrintedEditions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Authors_PrintedEditions_PrintedEditionId",
                table: "Authors");

            migrationBuilder.DropIndex(
                name: "IX_Authors_PrintedEditionId",
                table: "Authors");

            migrationBuilder.DropColumn(
                name: "PrintedEditionId",
                table: "Authors");
        }
    }
}
