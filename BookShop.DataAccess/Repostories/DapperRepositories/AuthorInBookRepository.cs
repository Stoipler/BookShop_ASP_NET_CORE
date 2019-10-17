using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Dapper;
using Dapper.Contrib.Extensions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class AuthorInBookRepository : BaseRepository<AuthorInBook>, IAuthorInBookRepository
    {
        public AuthorInBookRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task AddRangeAsync(List<AuthorInBook> authorInBooks)
        {
            await _connection.InsertAsync(authorInBooks);
        }

        public async Task RemoveRangeAsync(List<AuthorInBook> authorInBooks)
        {
            List<int> idsToRemove = authorInBooks.Select(item => item.Id).ToList();
            await _connection.ExecuteAsync($"DELETE FROM ProductsAuthors WHERE Id IN @ids", new { ids = idsToRemove });
        }
    }
}
