using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities.Interfaces;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using Dapper.Contrib.Extensions;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.DapperRepositories.Base
{
    public class BaseRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IBaseEntity
    {
        protected readonly IDbConnection _connection;

        public BaseRepository(ApplicationContext context)
        {
            _connection = new SqlConnection(context.ConnectionString);
        }

        public async Task<List<TEntity>> GetAsync()
        {
            List<TEntity> entities = (await _connection.GetAllAsync<TEntity>()).ToList();

            return entities;
        }

        public async Task<TEntity> AddAsync(TEntity item)
        {
            await _connection.InsertAsync(item);
            return item;
        }

        public async Task<TEntity> GetByIdAsync(int id)
        {
            TEntity entity = await _connection.GetAsync<TEntity>(id);

            return entity;
        }

        public async Task Remove(TEntity item)
        {
            await _connection.DeleteAsync(item);
        }

        public async Task UpdateAsync(TEntity item)
        {
            await _connection.UpdateAsync(item);
        }

        public async Task AddRangeAsync(List<TEntity> entities)
        {
            await _connection.InsertAsync(entities);
        }

        public async Task RemoveRangeAsync(List<TEntity> entities)
        {
            await _connection.DeleteAsync(entities);
        }

        public async Task UpdateRangeAsync(List<TEntity> entities)
        {
            await _connection.UpdateAsync(entities);
        }
    }
}
