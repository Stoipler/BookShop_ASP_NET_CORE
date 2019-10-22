using BookShop.BusinessLogic.Models.DiscountModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class DiscountService : IDiscountService
    {
        private readonly IDiscountRepository _discountRepository;
        private readonly IDiscountInBookRepository _discountInBookRepository;
        private readonly IPrintedEditionRepository _printedEditionRepository;

        public DiscountService(IDiscountRepository discountRepository, IDiscountInBookRepository discountInBookRepository, IPrintedEditionRepository printedEditionRepository)
        {
            _discountRepository = discountRepository;
            _discountInBookRepository = discountInBookRepository;
            _printedEditionRepository = printedEditionRepository;
        }

        public async Task AddDiscountAsync(DiscountCreationModel requestModel)
        {
            Discount discount = new Discount();
            discount = requestModel.DiscountModel.MapToEntity(discount);
            List<int> printedEditionIds = requestModel.PrintedEditionModels.Select(item => item.Id).ToList();

            List<PrintedEdition> printedEditions = await _printedEditionRepository.GetRangeByIdAsync(printedEditionIds);
            foreach (PrintedEdition printedEdition in printedEditions)
            {
                printedEdition.DiscountId = discount.Id;
            }

            discount = await _discountRepository.AddAsync(discount);

            await _printedEditionRepository.UpdateRangeAsync(printedEditions);

        }
    }
}
