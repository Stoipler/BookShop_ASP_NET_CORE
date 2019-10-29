using BookShop.DataAccess.Entities.Interfaces;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using MongoDB.Driver;
using MongoDbGenericRepository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories.Base
{
    public class BaseRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IBaseEntity
    {
        protected IMongoDbContext _mongoDbContext;
        protected IMongoClient _client;
        protected IMongoCollection<TEntity> _mongoCollection;
        public BaseRepository(IMongoDbContext mongoDbContext)
        {
            _mongoDbContext = mongoDbContext;
            _client = mongoDbContext.Client;
            _mongoCollection = _mongoDbContext.GetCollection<TEntity>();
        }

        public async Task<TEntity> AddAsync(TEntity item)
        {
            await _mongoCollection.InsertOneAsync(item);
            return item;
        }

        public async Task AddRangeAsync(List<TEntity> entities)
        {
            await _mongoCollection.InsertManyAsync(entities);
        }

        public async Task<List<TEntity>> GetAsync()
        {
            IAsyncCursor<TEntity> entities = await _mongoCollection.FindAsync(item => true);
            List<TEntity> result = entities.ToList();
            return result;
        }

        public async Task<TEntity> GetByIdAsync(string id)
        {
            IAsyncCursor<TEntity> asyncCursor = await _mongoCollection.FindAsync(item => item.Id == id);
            TEntity entity = await asyncCursor.FirstOrDefaultAsync();
            return entity;
        }

        public async Task Remove(TEntity item)
        {
            await _mongoCollection.DeleteOneAsync(entity => entity.Id == item.Id);
        }

        public async Task RemoveRangeAsync(List<TEntity> entities)
        {
            List<string> ids = entities.Select(item => item.Id).ToList();

            await _mongoCollection.DeleteManyAsync(item => ids.Contains(item.Id));
        }

        public async Task UpdateAsync(TEntity entity)
        {
            await _mongoCollection.ReplaceOneAsync(item => item.Id == entity.Id, entity);
        }

        public async Task UpdateRangeAsync(List<TEntity> entities)
        {
            using (IClientSessionHandle session = await _client.StartSessionAsync())
            {
                session.StartTransaction();
                foreach (TEntity entity in entities)
                {
                    await _mongoCollection.ReplaceOneAsync(item => item.Id == entity.Id, entity);
                }

                await session.CommitTransactionAsync();
            }

        }
    }
}
