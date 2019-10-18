using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities.Interfaces;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base
{
    public class BaseRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IBaseEntity
    {
        protected ApplicationContext _context;
        protected DbSet<TEntity> _dbSet;

        public BaseRepository(ApplicationContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        public async Task<List<TEntity>> GetAsync()
        {
            List<TEntity> result = await _dbSet.ToListAsync();
            return result;
        }

        public async Task CreateAsync(TEntity item)
        {
            await _dbSet.AddAsync(item);

            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(TEntity item)
        {
            _context.Entry(item).State = EntityState.Modified;

            await _context.SaveChangesAsync();
        }
        public async Task Remove(TEntity item)
        {
            _dbSet.Remove(item);

            await _context.SaveChangesAsync();
        }

        public async Task<TEntity> GetByIdAsync(int id)
        {
            TEntity enity = await _dbSet.FindAsync(id);

            return enity;
        }
    }

}
