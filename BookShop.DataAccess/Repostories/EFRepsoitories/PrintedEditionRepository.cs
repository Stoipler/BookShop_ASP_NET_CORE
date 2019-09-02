using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class PrintedEditionRepository : BaseRepository<PrintedEdition>, IPrintedEditionRepository
    {
        private ApplicationContext _context;
        private DbSet<ApplicationUser> _dbSet;

        public PrintedEditionRepository(ApplicationContext context) : base(context)
        {
            _context = context;
            _dbSet = context.Set<ApplicationUser>();
        }

        // TODO  Need to add filtration parameters and implementation of methods for that
        
    }
}
