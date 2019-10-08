using BookShop.BusinessLogic.AuthorModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthorSearchParamsDA = BookShop.DataAccess.Models.AuthorSearchParams;

namespace BookShop.BusinessLogic.Services
{
    public class AuthorService : IAuthorService
    {
        private readonly IAuthorRepository _authorRepository;
        public AuthorService(IAuthorRepository authorRepository)
        {
            this._authorRepository = authorRepository;
        }
        public async Task<List<AuthorModel>> GetAsync(AuthorSearchParams authorSearchParams)
        {
            AuthorSearchParamsDA authorSearchParamsDA = new AuthorSearchParamsDA { Name = authorSearchParams.Name, Page = authorSearchParams.Page, PageSize = authorSearchParams.PageSize };
            if (!(authorSearchParams.AuthorsList is null))
            {
                authorSearchParamsDA.AuthorsList = authorSearchParams.AuthorsList.Select(item => new Author { Id = item.Id, Name = item.Name }).ToList();
            }
            (List<AuthorWithNestedObjects> authors, int count) = await _authorRepository.GetWithParamsAsync(authorSearchParamsDA);
            List<AuthorModel> authorModels = authors.Select(item => new AuthorModel(item)).ToList();
            return authorModels;
        }
        public async Task<AuthorPageModel> GetWithPaginationAsync(AuthorSearchParams authorSearchParams)
        {
            AuthorPageModel authorPageModel = new AuthorPageModel();
            AuthorSearchParamsDA authorSearchParamsDA = new AuthorSearchParamsDA { Name = authorSearchParams.Name, Page = authorSearchParams.Page, PageSize = authorSearchParams.PageSize };
            if (!(authorSearchParams.AuthorsList is null))
            {
                authorSearchParamsDA.AuthorsList = authorSearchParams.AuthorsList.Select(item => new Author { Id = item.Id, Name = item.Name }).ToList();
            }
            (List<AuthorWithNestedObjects> authors, int count) = await _authorRepository.GetWithParamsAsync(authorSearchParamsDA);
            List<AuthorModel> authorModels = authors.Select(item => new AuthorModel(item)).ToList();
            authorPageModel.Count = count;
            authorPageModel.CurrentPage = authorSearchParamsDA.Page;
            authorPageModel.PageSize = authorSearchParamsDA.PageSize;
            authorPageModel.AuthorModels = authorModels;
            return authorPageModel;
        }
        public async Task CreateAsync(AuthorModel model)
        {
            Author author = new Author { Name = model.Name };
            await _authorRepository.CreateAsync(author);
        }
        public async Task Update(AuthorModel model)
        {
            Author author = await _authorRepository.GetByIdAsync(model.Id);
            author.Name = model.Name;
            await _authorRepository.Update(author);
        }
        public async Task Remove(int id)
        {
            Author author = await _authorRepository.GetByIdAsync(id);
            await _authorRepository.Remove(author);
        }
        public async Task<AuthorModel> GetByIdAsync(int id)
        {
            Author author = await _authorRepository.GetByIdAsync(id);
            AuthorModel authorModel = new AuthorModel(author);
            return authorModel;
        }


    }
}
