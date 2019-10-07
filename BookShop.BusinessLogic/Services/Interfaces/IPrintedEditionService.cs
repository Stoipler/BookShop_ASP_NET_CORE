using BookShop.BusinessLogic.PrintedEditionModels;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IPrintedEditionService
    {
        Task<PrintedEditionPageModel> GetAsync(PrintedEditionSearchParams searchParams);
        Task<PrintedEditionModel> CreateAsync(PrintedEditionModel model);
        Task Update(PrintedEditionModel model);
        Task Remove(PrintedEditionModel model);
        Task<PrintedEditionModel> GetByIdAsync(int id);
    }
}
