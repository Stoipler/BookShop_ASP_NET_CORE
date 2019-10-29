using BookShop.DataAccess.Entities.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces.Base
{
    public interface IGenericRepository<TEntity> where TEntity : IBaseEntity
    {
        Task<List<TEntity>> GetAsync();
        Task<TEntity> GetByIdAsync(string id);
        Task<TEntity> AddAsync(TEntity item);
        Task UpdateAsync(TEntity item);
        Task Remove(TEntity item);
        Task AddRangeAsync(List<TEntity> entities);
        Task RemoveRangeAsync(List<TEntity> entities);
        Task UpdateRangeAsync(List<TEntity> entities);
        
    }
}
