using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.BusinessLogic.Services
{
    public class PrintedEditionService : IPrintedEditionService
    {
        private readonly IPrintedEditionRepository _printedEditionRepository;

        public PrintedEditionService(IPrintedEditionRepository printedEditionRepository)
        {
            this._printedEditionRepository = printedEditionRepository;
        }

        public async Task CreateAsync(PrintedEditionModel model)
        {
            PrintedEdition printedEdition =
                new PrintedEdition
                {
                    Name = model.Name,
                    Description = model.Description,
                    Type = model.Type
                };
            await _printedEditionRepository.CreateAsync(printedEdition);
        }

        public async Task<IEnumerable<PrintedEditionModel>> GetAsync(int sortCriteriaInt, int printedEditionTypeInt, decimal priceFrom, decimal priceTo)
        {

            SortCriteria sortCriteria = (SortCriteria)(sortCriteriaInt);
            PrintedEditionType printedEditionType = (PrintedEditionType)(printedEditionTypeInt);
            List<PrintedEdition> printedEditions = (await _printedEditionRepository.GetSortedAsync(sortCriteria,printedEditionType,priceFrom,priceTo)).ToList(); 
            List<PrintedEditionModel> printedEditionModels = new List<PrintedEditionModel>();
            foreach (PrintedEdition printedEdition in printedEditions)
            {
                printedEditionModels.Add(new PrintedEditionModel(printedEdition));
            }
            return printedEditionModels;
        }

        public async Task Remove(PrintedEditionModel model)
        {
            PrintedEdition printedEdition =
                new PrintedEdition
                {
                    Id = model.Id,
                    Name = model.Name,
                    Description = model.Description,
                    Price = model.Price,
                    IsRemoved = model.IsRemoved,
                    Status = model.Status,
                    Currency = model.Currency,
                    Type = model.Type
                };
            await _printedEditionRepository.Remove(printedEdition);
        }

        public async Task Update(PrintedEditionModel model)
        {
            PrintedEdition printedEdition =
                new PrintedEdition
                {
                    Id = model.Id,
                    Name = model.Name,
                    Description = model.Description,
                    Price = model.Price,
                    IsRemoved = model.IsRemoved,
                    Status = model.Status,
                    Currency = model.Currency,
                    Type = model.Type
                };
            await _printedEditionRepository.Update(printedEdition);
        }
    }
}
