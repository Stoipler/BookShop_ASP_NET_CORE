using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces.Base
{
    public interface IGenericRepository<TEntity> where TEntity:class
    {
        Task<IEnumerable<TEntity>> GetAsync();
        Task CreateAsync(TEntity item);
        Task Update(TEntity item);
        Task Remove(TEntity item);
    }
}
