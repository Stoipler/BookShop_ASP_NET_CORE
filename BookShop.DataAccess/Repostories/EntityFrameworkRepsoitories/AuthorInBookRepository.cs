using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class AuthorInBookRepository : BaseRepository<AuthorInBook>, IAuthorInBookRepository
    {
        public AuthorInBookRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task AddRangeAsync(List<AuthorInBook> authorInBooks)
        {
            await _dbSet.AddRangeAsync(authorInBooks);

            await _context.SaveChangesAsync();
        }

        public async Task RemoveRangeAsync(List<AuthorInBook> listToRemove)
        {
            _dbSet.RemoveRange(listToRemove);

            await _context.SaveChangesAsync();
        }
    }
}
