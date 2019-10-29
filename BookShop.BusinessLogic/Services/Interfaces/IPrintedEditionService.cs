using BookShop.BusinessLogic.PrintedEditionModels;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IPrintedEditionService
    {
        Task<PrintedEditionResponseModel> GetAsync(PrintedEditionRequestModel searchParams);
        Task<PrintedEditionModel> CreateAsync(PrintedEditionModel model);
        Task Update(PrintedEditionModel model);
        Task Remove(PrintedEditionModel model);
        Task<PrintedEditionModel> GetByIdAsync(string id);
    }
}
