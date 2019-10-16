using BookShop.BusinessLogic.PrintedEditionModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class PrintedEditionService : IPrintedEditionService
    {
        private readonly IPrintedEditionRepository _printedEditionRepository;
        private readonly IAuthorInBookRepository _authorInBookRepository;

        public PrintedEditionService(IPrintedEditionRepository printedEditionRepository, IAuthorInBookRepository authorInBookRepository)
        {
            this._printedEditionRepository = printedEditionRepository;
            this._authorInBookRepository = authorInBookRepository;
        }

        public async Task<PrintedEditionResponseModel> GetAsync(PrintedEditionRequestModel requestModel)
        {
            PrintedEditionRequestParameters parameters = requestModel.MapToRequestParameters();
            (List<PrintedEditionWithNestedObjects> printedEditions, int count) = await _printedEditionRepository.GetWithNestedObjectsAsync(parameters);

            PrintedEditionResponseModel responseModel = new PrintedEditionResponseModel(count, printedEditions);

            return responseModel;
        }

        public async Task<PrintedEditionModel> GetByIdAsync(int id)
        {
            PrintedEditionWithNestedObjects printedEdition = await _printedEditionRepository.GetWithNestedObjectsByIdAsync(id);
            PrintedEditionModel printedEditionModel = new PrintedEditionModel(printedEdition);

            return printedEditionModel;
        }

        public async Task<PrintedEditionModel> CreateAsync(PrintedEditionModel model)
        {
            PrintedEdition printedEdition = model.MapToEntity();
            printedEdition = await _printedEditionRepository.CreateAsync(printedEdition);

            List<AuthorInBook> authorInBooks = new List<AuthorInBook>();

            if (model.AuthorModels.Any())
            {
                authorInBooks = model.AuthorModels.Select(item => new AuthorInBook { PrintedEditionId = printedEdition.Id, AuthorId = item.Id }).ToList();
                await _authorInBookRepository.AddRangeAsync(authorInBooks);
            }

            return model;
        }

        public async Task Update(PrintedEditionModel model)
        {
            PrintedEditionWithNestedObjects printedEdition = await _printedEditionRepository.GetWithNestedObjectsByIdAsync(model.Id);
            printedEdition.PrintedEdition = model.MapToEntity(printedEdition.PrintedEdition);

            List<int> authorIdsFromModel = model.AuthorModels.Select(item => item.Id).ToList();
            List<int> authorIdsFromEntity = printedEdition.AuthorInBooks.Select(item => item.AuthorId).ToList();

            List<AuthorInBook> listToRemove = printedEdition.AuthorInBooks.Where(item => !authorIdsFromModel.Contains(item.AuthorId)).ToList();
            List<AuthorInBook> listToCreate = model.AuthorModels.Where(item => !authorIdsFromEntity.Contains(item.Id)).Select(item => new AuthorInBook { PrintedEditionId = printedEdition.PrintedEdition.Id, AuthorId = item.Id }).ToList();

            await _printedEditionRepository.UpdateAsync(printedEdition.PrintedEdition);
            if (listToRemove.Any())
            {
                await _authorInBookRepository.RemoveRangeAsync(listToRemove);
            }
            if (listToCreate.Any())
            {
                await _authorInBookRepository.AddRangeAsync(listToCreate);
            }
        }

        public async Task Remove(PrintedEditionModel model)
        {
            PrintedEdition printedEdition = await _printedEditionRepository.GetByIdAsync(model.Id);
            await _printedEditionRepository.Remove(printedEdition);
        }
    }
}
