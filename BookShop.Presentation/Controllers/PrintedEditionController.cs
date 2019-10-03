using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class PrintedEditionController : Controller
    {
        private readonly IPrintedEditionService _printedEditionService;
        public PrintedEditionController(IPrintedEditionService printedEditionService)
        {
            _printedEditionService = printedEditionService;
        }
        
        [HttpPost]
        public async Task<PrintedEditionPageModel> Get([FromBody]PrintedEditionSearchParams searchParams)
        {
            return await _printedEditionService.GetSortedAsync(searchParams);
        }


        [HttpPost]
        public async Task Post([FromBody]PrintedEditionModel model)
        {
            model = await _printedEditionService.CreateAsync(model);
            if (!(model.AuthorModels is null))
            {
                foreach (AuthorModel author in model.AuthorModels)
                {
                    await _printedEditionService.AddAuthorToBookAsync(new AuthorInBookModel { AuthorId = author.Id, PrintedEditionId = model.Id });
                }
            }
        }

        [HttpGet("{id}")]
        public async Task<PrintedEditionModel> GetById(int id)
        {
            return await _printedEditionService.GetByIdAsync(id);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]PrintedEditionModel model)
        {
            await _printedEditionService.Update(model);
            return Ok();
        }
    }
}
