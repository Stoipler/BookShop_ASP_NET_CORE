using BookShop.DataAccess.Entities.Interfaces;
using BookShop.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces.Base
{
    public interface IGenericRepository<TEntity> where TEntity:IBaseEntity
    {
        Task<IEnumerable<TEntity>> GetAsync();
        Task<TEntity> GetByIdAsync(int id);
        Task<TEntity> CreateAsync(TEntity item);
        Task Update(TEntity item);
        Task Remove(TEntity item);
    }
}
