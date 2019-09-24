using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class AuthorInBookRepository : BaseRepository<AuthorInBook>, IAuthorInBookRepository
    {
        public AuthorInBookRepository(ApplicationContext context) : base(context)
        {
        }
        public override async Task Remove(AuthorInBook item)
        {
            _dbSet.Remove(item);

            await _context.SaveChangesAsync();
        }

        public async Task RemoveRange(List<AuthorInBook> authorInBooks)
        {
            _dbSet.RemoveRange(authorInBooks);
            await _context.SaveChangesAsync();
        }

        public async Task AddRange(List<AuthorInBook> authorInBooks)
        {
            _dbSet.AddRange(authorInBooks);
            await _context.SaveChangesAsync();
        }
    }
}
