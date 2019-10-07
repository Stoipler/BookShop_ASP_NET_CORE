using BookShop.BusinessLogic.PrintedEditionModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;
using PrintedEditionSearchParams = BookShop.BusinessLogic.PrintedEditionModels.PrintedEditionSearchParams;
using SearchParamsDA = BookShop.DataAccess.Models.PrintedEditionSearchParams;

namespace BookShop.BusinessLogic.Services
{
    public class PrintedEditionService : IPrintedEditionService
    {
        private readonly IPrintedEditionRepository _printedEditionRepository;
        private readonly IAuthorInBookRepository _authorInBookRepository;
        private readonly IAuthorRepository _authorRepository;

        public PrintedEditionService(IPrintedEditionRepository printedEditionRepository, IAuthorInBookRepository authorInBookRepository, IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
            this._printedEditionRepository = printedEditionRepository;
            this._authorInBookRepository = authorInBookRepository;
        }

        public async Task<PrintedEditionPageModel> GetAsync(PrintedEditionSearchParams searchParams)
        {
            SearchParamsDA searchParamsDA = new SearchParamsDA();
            SearchParametersMaping(searchParams, searchParamsDA);
            (List<PrintedEditionWithNestedObjects> printedEditions, int count) = await _printedEditionRepository.GetWithNestedObjectsAsync(searchParamsDA);
            PrintedEditionPageModel pageModel = new PrintedEditionPageModel(count, searchParamsDA.Page, searchParamsDA.PageSize, printedEditions);
            return pageModel;
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
            if (!(model.AuthorModels is null))
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

            await _printedEditionRepository.Update(printedEdition.PrintedEdition);
            if (!(listToRemove is null))
            {
                await _authorInBookRepository.RemoveRangeAsync(listToRemove);
            }
            if (!(listToCreate is null))
            {
                await _authorInBookRepository.AddRangeAsync(listToCreate);
            }
        }
        public async Task Remove(PrintedEditionModel model)
        {
            PrintedEdition printedEdition = await _printedEditionRepository.GetByIdAsync(model.Id);
            await _printedEditionRepository.Remove(printedEdition);
        }

        private void SearchParametersMaping(PrintedEditionSearchParams searchParams, SearchParamsDA searchParamsDA)
        {
            if (searchParams.Page != 0)
            {
                searchParamsDA.Page = searchParams.Page;
            }
            if (searchParams.PageSize != 0)
            {
                searchParamsDA.PageSize = searchParams.PageSize;
            }
            if (searchParams.PriceFrom != 0)
            {
                searchParamsDA.PriceFrom = searchParams.PriceFrom;
            }
            if (searchParams.PriceTo != 0)
            {
                searchParamsDA.PriceTo = searchParams.PriceTo;
            }
            if (searchParams.PrintedEditionType != PrintedEditionType.None)
            {
                searchParamsDA.PrintedEditionType = searchParams.PrintedEditionType;
            }
            if (searchParams.SortCriteria != SortCriteria.None)
            {
                searchParamsDA.SortCriteria = searchParams.SortCriteria;
            }
            searchParamsDA.KeyWord = searchParams.KeyWord;
        }


    }
}
