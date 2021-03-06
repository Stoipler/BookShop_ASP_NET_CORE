﻿using BookShop.DataAccess.Entities.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces.Base
{
    public interface IGenericRepository<TEntity> where TEntity : IBaseEntity
    {
        Task<List<TEntity>> GetAsync();
        Task<TEntity> GetByIdAsync(int id);
        Task CreateAsync(TEntity item);
        Task UpdateAsync(TEntity item);
        Task Remove(TEntity item);
    }
}
