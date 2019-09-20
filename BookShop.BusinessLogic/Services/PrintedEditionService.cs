using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;
using SearchParams = BookShop.BusinessLogic.Models.SearchParams;
using SearchParamsDA = BookShop.DataAccess.Models.SearchParams;

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

        public async Task CreateAsync(PrintedEditionModel model)
        {
            PrintedEdition printedEdition =
                new PrintedEdition
                {
                    Name = model.Name,
                    Description = model.Description,
                    Type = model.Type,
                    Price = model.Price

                };
            await _printedEditionRepository.CreateAsync(printedEdition);
        }
        public async Task<PageModel> GetSortedAsync(SearchParams searchParams)
        {

            SearchParamsDA searchParamsDA = new SearchParamsDA();
            SearchParametersMaping(searchParams, searchParamsDA);

            List<PrintedEdition> printedEditions = (await _printedEditionRepository.GetSortedAsync(searchParamsDA)).ToList();
            List<PrintedEditionModel> printedEditionModels = new List<PrintedEditionModel>();
            foreach (PrintedEdition printedEdition in printedEditions)
            {
                printedEditionModels.Add(new PrintedEditionModel(printedEdition));
            }
            PageModel pageModel = new PageModel
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
            await _printedEditionRepository.Update(printedEdition);
        }
        private void SearchParametersMaping(SearchParams searchParams, SearchParamsDA searchParamsDA)
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
    }
}
