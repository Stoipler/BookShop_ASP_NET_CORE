using BookShop.BusinessLogic.AuthorModels;
using BookShop.BusinessLogic.Models.AuthorModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class AuthorService : IAuthorService
    {
        private readonly IAuthorRepository _authorRepository;
        public AuthorService(IAuthorRepository authorRepository)
        {
            this._authorRepository = authorRepository;
        }
        public async Task<AuthorResponseModel> GetAsync(AuthorRequestModel requestModel)
        {
            AuthorRequestParameters parameters = requestModel.MapToRequestParameters();
            (List<AuthorWithNestedObjects> authors, int count) = await _authorRepository.GetWithParamsAsync(parameters);
            List<AuthorModel> authorModels = authors.Select(item => new AuthorModel(item)).ToList();
            AuthorResponseModel responseModel = new AuthorResponseModel
            {
                Count = count,
                AuthorsList = authorModels
            };
            return responseModel;
        }
        public async Task CreateAsync(AuthorModel requestModel)
        {
            Author author =requestModel.MapToEntity();
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
