using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(ApplicationContext context) : base(context)
        {
        }
        public async Task<IEnumerable<Author>> GetWithParamsAsync(AuthorSearchParams authorSearchParams)
        {
            IQueryable<Author> authors = _dbSet.Include(x => x.AuthorInBooks).ThenInclude(i => i.PrintedEdition);
            if (!string.IsNullOrWhiteSpace(authorSearchParams.Name))
            {
                authors = authors.Where(a => a.Name.Contains(authorSearchParams.Name, StringComparison.OrdinalIgnoreCase));
            }
            if (authorSearchParams.AuthorsList != null)
            {
                IEnumerable<int> authorsToDelete = authorSearchParams.AuthorsList.Select(author => author.Id);
                authors = authors.Where(a => !authorsToDelete.Contains(a.Id));
            }
            return await authors.AsNoTracking().ToListAsync();
        }
    }
}
