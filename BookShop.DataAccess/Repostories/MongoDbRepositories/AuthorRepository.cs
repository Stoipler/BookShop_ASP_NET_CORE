using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using BookShop.DataAccess.Repostories.MongoDbRepositories.Base;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDbGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
        {
        }

        public async Task<(List<AuthorWithNestedObjects>, int)> GetWithParamsAsync(AuthorRequestParameters parameters)
        {
            IMongoQueryable<AuthorWithNestedObjects> authors = _mongoCollection.AsQueryable().GroupJoin(_mongoDbContext.GetCollection<AuthorInBook>(),
                outerKeySelector => outerKeySelector.Id,
                innerKeySelector => innerKeySelector.AuthorId,
                (author, authorInBooks) => new AuthorWithNestedObjects
                {
                    Author = author,
                    AuthorInBooks = authorInBooks.ToList()
                });
            
            if (!string.IsNullOrWhiteSpace(parameters.Name))
            {
                authors = authors.Where(item => item.Author.Name.Contains(parameters.Name, StringComparison.OrdinalIgnoreCase));
            }

            if (parameters.IgnoreAuthorsList.Any())
            {
                authors = authors.Where(item => !parameters.IgnoreAuthorsList.Contains(item.Author.Id));
            }

            authors = authors.OrderByDescending(item => item.Author.CreationDate);


            int count = default(int);

            if (parameters.WithPagination)
            {
                count = await authors.CountAsync();
                int skipCount = (--parameters.Page) * parameters.PageSize;
                authors = authors.Skip(skipCount).Take(parameters.PageSize);
            }
           
            List<AuthorWithNestedObjects> result = await authors.ToListAsync();

            return (result, count);
        }
    }
}
