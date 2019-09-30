using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;
using PrintedEditionSearchParams = BookShop.BusinessLogic.Models.PrintedEditionSearchParams;
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
        public async Task<PrintedEditionModel> CreateAsync(PrintedEditionModel model)
        {
            PrintedEdition printedEdition =
                new PrintedEdition
                {
                    Name = model.Name,
                    Description = model.Description,
                    Type = model.Type,
                    Price = model.Price
                };
            PrintedEdition result= await _printedEditionRepository.CreateAsync(printedEdition);
            model.Id = result.Id;
            return model;
        }
        public async Task<PrintedEditionPageModel> GetSortedAsync(PrintedEditionSearchParams searchParams)
        {
            SearchParamsDA searchParamsDA = new SearchParamsDA();
            SearchParametersMaping(searchParams, searchParamsDA);
            List<PrintedEdition> printedEditions = (await _printedEditionRepository.GetSortedAsync(searchParamsDA)).ToList();
            List<PrintedEditionModel> printedEditionModels = new List<PrintedEditionModel>();
            foreach (PrintedEdition printedEdition in printedEditions)
            {
                printedEditionModels.Add(new PrintedEditionModel(printedEdition));
            }
            PrintedEditionPageModel pageModel = new PrintedEditionPageModel
            {
                Count = await _printedEditionRepository.GetCollectionSizeAsync(searchParamsDA),
                CurrentPage = searchParamsDA.Page,
                PageSize = searchParamsDA.PageSize
            };
            pageModel.PrintedEditionModels = printedEditionModels;
            return pageModel;
        }
        public async Task<IEnumerable<PrintedEditionModel>> GetAsync()
        {
            List<PrintedEdition> printedEditions = (await _printedEditionRepository.GetAsync()).ToList();
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
                    Currency = model.Currency,
                    Type = model.Type
                };
            await _printedEditionRepository.Remove(printedEdition);
        }
        public async Task Update(PrintedEditionModel model)
        {

            PrintedEdition fromOrigin = await _printedEditionRepository.GetByIdAsync(model.Id);

            fromOrigin.Id = model.Id;
            fromOrigin.Name = model.Name;
            fromOrigin.Description = model.Description;
            fromOrigin.Price = model.Price;
            fromOrigin.IsRemoved = model.IsRemoved;
            fromOrigin.Currency = model.Currency;
            fromOrigin.Type = model.Type;

            List<int> authorIdsFromModel = model.AuthorModels.Select(item => item.Id).ToList();
            List<int> newAuthorModelIds = fromOrigin.AuthorInBooks.Select(authorModel => authorModel.AuthorId).ToList();

            List<AuthorInBook> toRemove = fromOrigin.AuthorInBooks.Where(item => !authorIdsFromModel.Contains(item.AuthorId)).ToList();
            List<AuthorInBook> toCreate = model.AuthorModels.Where(item => !newAuthorModelIds.Contains(item.Id))
                                                            .Select(item => new AuthorInBook() { AuthorId = item.Id, PrintedEditionId = model.Id }).ToList();

            await _printedEditionRepository.Update(fromOrigin);
            if (toCreate.Count != 0)
            {
                await _authorInBookRepository.AddRange(toCreate);
            }
            if (toRemove.Count != 0)
            {
                await _authorInBookRepository.RemoveRange(toRemove);
            }
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
        public async Task<PrintedEditionModel> GetByIdAsync(int id)
        {
            PrintedEdition printedEdition = await _printedEditionRepository.GetByIdAsync(id);
            return new PrintedEditionModel(printedEdition);
        }
        public async Task AddAuthorToBookAsync(AuthorInBookModel model)
        {
            await _authorInBookRepository.CreateAsync(new AuthorInBook { AuthorId = model.AuthorId, PrintedEditionId = model.PrintedEditionId });
        }
        public async Task RemoveAuthorFromBookAsync(AuthorInBookModel model)
        {
            await _authorInBookRepository.Remove(new AuthorInBook { AuthorId = model.AuthorId, PrintedEditionId = model.PrintedEditionId });
        }
    }
}
