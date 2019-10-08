using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<AuthorWithNestedObjects>, int)> GetWithParamsAsync(AuthorSearchParams authorSearchParams)
        {
            IQueryable<AuthorWithNestedObjects> authors = _dbSet.GroupJoin(_context.AuthorInBooks.Include(item => item.PrintedEdition),
                outerKeySelector => outerKeySelector.Id,
              innerKeySelector => innerKeySelector.AuthorId,
              (author, authorInBooks) => new AuthorWithNestedObjects
              {
                  Author = author,
                  AuthorInBooks = authorInBooks.ToList()
              });
            if (!string.IsNullOrWhiteSpace(authorSearchParams.Name))
            {
                authors = authors.Where(item => item.Author.Name.Contains(authorSearchParams.Name, StringComparison.OrdinalIgnoreCase));
            }
            if (!(authorSearchParams.AuthorsList is null))
            {
                IEnumerable<int> authorsToDelete = authorSearchParams.AuthorsList.Select(author => author.Id);
                authors = authors.Where(item => !authorsToDelete.Contains(item.Author.Id));
            }
            int count = 0;
            if (authorSearchParams.PageSize != 0 && authorSearchParams.Page != 0)
            {
                count = await authors.CountAsync();
                int skipCount = (--authorSearchParams.Page) * authorSearchParams.PageSize;
                authors = authors.Skip(skipCount).Take(authorSearchParams.PageSize);
            }
            List<AuthorWithNestedObjects> result = await authors.AsNoTracking().ToListAsync();
            return (result, count);
        }

    }
}
