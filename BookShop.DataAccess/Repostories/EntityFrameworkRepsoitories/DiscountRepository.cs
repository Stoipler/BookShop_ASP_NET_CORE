using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.DiscountWithNestedObjects;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class DiscountRepository : BaseRepository<Discount>, IDiscountRepository
    {
        public DiscountRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<DiscountWithNestedObjects>, int)> GetWithNestedObjectsAsync(DiscountRequestParameters parameters)
        {
            IQueryable<DiscountWithNestedObjects> discounts = _dbSet.GroupJoin(_context.PrintedEditions,
                outerKeySelector => outerKeySelector.Id,
                innerKeySelector => innerKeySelector.DiscountId,
                (discount, printedEditions) => new DiscountWithNestedObjects
                {
                    Discount = discount,
                    PrintedEditions = printedEditions.ToList()
                });

            if (!string.IsNullOrWhiteSpace(parameters.KeyWord))
            {
                discounts = discounts.Where(item => item.Discount.Description.Contains(parameters.KeyWord));
            }

            int count = await discounts.CountAsync();

            discounts = discounts.Skip(parameters.Skip).Take(parameters.PageSize);

            List<DiscountWithNestedObjects> result = await discounts.AsNoTracking().ToListAsync();

            return (result, count);
        }
    }
}
