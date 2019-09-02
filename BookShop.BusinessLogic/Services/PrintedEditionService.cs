using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

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
                {   Id=model.Id,
                    Name =model.Name,
                    Description =model.Description,
                    Price =model.Price,
                    IsRemoved =model.IsRemoved,
                    Status =model.Status,
                    Currency =model.Currency,
                    Type =model.Type };
            await _printedEditionRepository.CreateAsync(printedEdition);
        }

        public async Task<IEnumerable<PrintedEditionModel>> GetAsync()
        {
            var printedEditions = await _printedEditionRepository.GetAsync();
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
