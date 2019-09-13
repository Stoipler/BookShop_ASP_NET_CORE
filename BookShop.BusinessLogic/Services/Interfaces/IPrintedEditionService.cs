using BookShop.BusinessLogic.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IPrintedEditionService
    {
        Task<IEnumerable<PrintedEditionModel>> GetAsync(int sortOption);
        Task CreateAsync(PrintedEditionModel model);
        Task Update(PrintedEditionModel model);
        Task Remove(PrintedEditionModel model);
    }
}
