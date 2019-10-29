using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IPrintedEditionRepository : IGenericRepository<PrintedEdition>
    {
        Task<(List<PrintedEditionWithNestedObjects>, int)> GetWithNestedObjectsAsync(PrintedEditionRequestParameters searchParams);
        Task<List<PrintedEdition>> GetRangeByIdAsync(List<string> printedEditionIds);
        Task<PrintedEditionWithNestedObjects> GetWithNestedObjectsByIdAsync(string id);
    }
}
