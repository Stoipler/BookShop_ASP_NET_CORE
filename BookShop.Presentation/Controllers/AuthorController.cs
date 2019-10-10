using BookShop.BusinessLogic.AuthorModels;
using BookShop.BusinessLogic.Models.AuthorModels;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPost(Name = "GetAuthors")]
        public async Task<AuthorResponseModel> GetAuthors([FromBody]AuthorRequestModel requestModel)
        {
            AuthorResponseModel responseModel = await _authorService.GetAsync(requestModel);
            return responseModel;
        }
        [HttpPost(Name = "CreateAuthor")]
        public async Task<IActionResult> CreateAuthor([FromBody]AuthorModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _authorService.CreateAsync(requestModel);
            return Ok();
        }
        [HttpPost(Name = "UpdateAuthor")]
        public async Task<IActionResult> UpdateAuthor([FromBody]AuthorModel model)
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
    }
}
