using BookShop.BusinessLogic.AuthorModels;
using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AuthorController : Controller
    {
        private readonly IAuthorService _authorService;
        public AuthorController(IAuthorService authorService)
        {
            this._authorService = authorService;
        }

        [HttpPost]
        public async Task<IEnumerable<AuthorModel>> Get([FromBody]AuthorSearchParams searchParams)
        {
            if (!string.IsNullOrWhiteSpace(searchParams.Name))
            {
                searchParams.Name = RemoveWhiteSpacesFromStart(searchParams.Name);
            }
            return await _authorService.GetAsync(searchParams);
        }
        [HttpPost]
        public async Task<AuthorPageModel> GetWithPagination([FromBody]AuthorSearchParams searchParams)
        {
            if (!string.IsNullOrWhiteSpace(searchParams.Name))
            {
                searchParams.Name = RemoveWhiteSpacesFromStart(searchParams.Name);
            }
            return await _authorService.GetWithPaginationAsync(searchParams);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]AuthorModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _authorService.CreateAsync(model);
            return Ok();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]AuthorModel model)
        {
            if (ModelState.IsValid)
            {
                await _authorService.Update(model);
                return Ok();
            }
            return BadRequest(ModelState);
        }
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _authorService.Remove(id);
        }

        private string RemoveWhiteSpacesFromStart(string input)
        {
            if(input.IndexOf(' ')==0) {
                return RemoveWhiteSpacesFromStart(input.TrimStart());
            }
            return input;
        }
    }
}
