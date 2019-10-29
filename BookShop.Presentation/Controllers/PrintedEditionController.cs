using BookShop.BusinessLogic.PrintedEditionModels;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
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

        [HttpPost(Name = "GetPrintedEditions")]
        public async Task<PrintedEditionResponseModel> GetPrintedEditions([FromBody]PrintedEditionRequestModel requestModel)
        {
            PrintedEditionResponseModel responseModel = await _printedEditionService.GetAsync(requestModel);

            return responseModel;
        }

        [Authorize(Roles = "admin")]
        [HttpPost(Name = "CreatePrintedEditon")]
        public async Task CreatePrintedEditon([FromBody]PrintedEditionModel model)
        {
            model = await _printedEditionService.CreateAsync(model);
        }

        [HttpGet("{id}")]
        public async Task<PrintedEditionModel> GetById(string id)
        {
            PrintedEditionModel printedEditionModel = await _printedEditionService.GetByIdAsync(id);

            return printedEditionModel;
        }

        [Authorize(Roles = "admin")]
        [HttpPost(Name = "UpdatePrintedEdition")]
        public async Task<IActionResult> UpdatePrintedEdition([FromBody]PrintedEditionModel model)
        {
            await _printedEditionService.Update(model);

            return Ok();
        }
    }
}
