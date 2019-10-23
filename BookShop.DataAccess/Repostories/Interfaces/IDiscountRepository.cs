using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.DiscountWithNestedObjects;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IDiscountRepository : IGenericRepository<Discount>
    {
        Task<(List<DiscountWithNestedObjects>, int)> GetWithNestedObjectsAsync(DiscountRequestParameters parameters);
    }
}
