﻿using BookShop.BusinessLogic.Models.DiscountModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.DiscountWithNestedObjects;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.BusinessLogic.Services
{
    public class DiscountService : IDiscountService
    {
        private readonly IDiscountRepository _discountRepository;
        private readonly IPrintedEditionRepository _printedEditionRepository;

        public DiscountService(IDiscountRepository discountRepository, IPrintedEditionRepository printedEditionRepository)
        {
            _discountRepository = discountRepository;
            _printedEditionRepository = printedEditionRepository;
        }

        public async Task AddDiscountAsync(DiscountCreationModel requestModel)
        {
            Discount discount = new Discount();
            discount = requestModel.DiscountModel.MapToEntity(discount);

            discount = await _discountRepository.AddAsync(discount);

            if (requestModel.DiscountModel.DiscountType == DiscountType.ForPrintedEditions)
            {
                List<int> printedEditionIds = requestModel.PrintedEditionModels.Select(item => item.Id).ToList();

                List<PrintedEdition> printedEditions = await _printedEditionRepository.GetRangeByIdAsync(printedEditionIds);
                foreach (PrintedEdition printedEdition in printedEditions)
                {
                    printedEdition.DiscountId = discount.Id;
                }

                await _printedEditionRepository.UpdateRangeAsync(printedEditions);
            }
        }

        public async Task<DiscountResponseModel> GetDiscountsAsync(DiscountRequestModel requestModel)
        {
            DiscountRequestParameters parameters = requestModel.MapToRequestParameters();
            (List<DiscountWithNestedObjects> discountWithNestedObjects, int count) = await _discountRepository.GetWithNestedObjectsAsync(parameters);

            DiscountResponseModel responseModel = new DiscountResponseModel() { Count = count };
            bool condition = discountWithNestedObjects.Any();
            if (condition)
            {
                responseModel.DiscountModels = discountWithNestedObjects.Select(item => new DiscountModel(item)).ToList();
            }

            return responseModel;
        }

    }
}