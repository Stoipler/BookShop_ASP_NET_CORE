using BookShop.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Initialization
{
    public class InitialData
    {
        internal static void Seed(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Author>().HasData(
                new Author
                {
                    Id = "1",
                    CreationDate = DateTime.UtcNow,
                    IsRemoved = false,
                    Name = "Joan Rowling"
                },
                new Author
                {
                    Id = "2",
                    CreationDate = DateTime.UtcNow,
                    IsRemoved = false,
                    Name = "J.R. Martin"
                },
                new Author
                {
                    Id = "3",
                    CreationDate = DateTime.UtcNow,
                    IsRemoved = false,
                    Name = "William Shaekspeare"
                },
                new Author
                {
                    Id = "4",
                    CreationDate = DateTime.UtcNow,
                    IsRemoved = false,
                    Name = "Some author"
                },
                new Author
                {
                    Id = "5",
                    CreationDate = DateTime.UtcNow,
                    IsRemoved = false,
                    Name = "Lev Tolstoy"
                },
                new Author
                {
                    Id = "6",
                    CreationDate = DateTime.UtcNow,
                    IsRemoved = false,
                    Name = "Incognito"
                },
                new Author
                {
                    Id = "7",
                    CreationDate = DateTime.UtcNow,
                    IsRemoved = false,
                    Name = "Stan Lee"
                }
                );

            modelBuilder.Entity<PrintedEdition>().HasData(
                 new PrintedEdition
                 {
                     Id = "1",
                     CreationDate = DateTime.UtcNow,
                     IsRemoved = false,
                     Name = "Harry Potter",
                     Description = "About boy who lived",
                     Type = PrintedEditionType.Book,
                     Currency = Currency.USD,
                     Price = 100M,
                 },
                 new PrintedEdition
                 {
                     Id = "2",
                     CreationDate = DateTime.UtcNow,
                     IsRemoved = false,
                     Name = "Song of ice and fire",
                     Description = "Origin of the Game of trones",
                     Type = PrintedEditionType.Book,
                     Currency = Currency.USD,
                     Price = 70.52M,
                 },
                 new PrintedEdition
                 {
                     Id = "3",
                     CreationDate = DateTime.UtcNow,
                     IsRemoved = false,
                     Name = "War and peace",
                     Description = "Historical novel",
                     Type = PrintedEditionType.Book,
                     Currency = Currency.USD,
                     Price = 78.52M,
                 },
                 new PrintedEdition
                 {
                     Id = "4",
                     CreationDate = DateTime.UtcNow,
                     IsRemoved = false,
                     Name = "Times",
                     Description = "New York newspaper",
                     Type = PrintedEditionType.Newspaper,
                     Currency = Currency.USD,
                     Price = 12.30M,
                 },
                  new PrintedEdition
                  {
                      Id = "5",
                      CreationDate = DateTime.UtcNow,
                      IsRemoved = false,
                      Name = "Shrek",
                      Description = "Not book",
                      Type = PrintedEditionType.Book,
                      Currency = Currency.USD,
                      Price = 23.70M,
                  },
                  new PrintedEdition
                  {
                      Id = "6",
                      CreationDate = DateTime.UtcNow,
                      IsRemoved = false,
                      Name = "The Simpsons",
                      Description = "Comics",
                      Type = PrintedEditionType.Journal,
                      Currency = Currency.USD,
                      Price = 15.00M,
                  },
                  new PrintedEdition
                  {
                      Id = "7",
                      CreationDate = DateTime.UtcNow,
                      IsRemoved = false,
                      Name = "The amazing Spider-Man",
                      Description = "Superhero tales",
                      Type = PrintedEditionType.Journal,
                      Currency = Currency.USD,
                      Price = 18.00M,
                  },
                  new PrintedEdition
                  {
                      Id = "8",
                      CreationDate = DateTime.UtcNow,
                      IsRemoved = false,
                      Name = "Electronics today",
                      Description = "Science news",
                      Type = PrintedEditionType.Newspaper,
                      Currency = Currency.USD,
                      Price = 5.00M,
                  },
                  new PrintedEdition
                  {
                      Id = "9",
                      CreationDate = DateTime.UtcNow,
                      IsRemoved = false,
                      Name = "Wired",
                      Description = "Computer Journal",
                      Type = PrintedEditionType.Journal,
                      Currency = Currency.USD,
                      Price = 5.00M,
                  }
                 );

            modelBuilder.Entity<AuthorInBook>().HasData(
               new AuthorInBook
               {
                   Id = "1",
                   CreationDate = DateTime.UtcNow,
                   IsRemoved = false,
                   PrintedEditionId = "1",
                   AuthorId = "1"
               },
               new AuthorInBook
               {
                   Id = "2",
                   CreationDate = DateTime.UtcNow,
                   IsRemoved = false,
                   PrintedEditionId = "2",
                   AuthorId = "2"
               },
               new AuthorInBook
               {
                   Id = "3",
                   CreationDate = DateTime.UtcNow,
                   IsRemoved = false,
                   PrintedEditionId = "3",
                   AuthorId = "3"
               },
               new AuthorInBook
               {
                   Id = "4",
                   CreationDate = DateTime.UtcNow,
                   IsRemoved = false,
                   PrintedEditionId = "4",
                   AuthorId = "4"
               },
               new AuthorInBook
               {
                   Id = "5",
                   CreationDate = DateTime.UtcNow,
                   IsRemoved = false,
                   PrintedEditionId = "5",
                   AuthorId = "5"
               },
               new AuthorInBook
               {
                   Id = "6",
                   CreationDate = DateTime.UtcNow,
                   IsRemoved = false,
                   PrintedEditionId = "6",
                   AuthorId = "6"
               }
               );
        }
    }
}
