using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PrintedEditionController : Controller
    {
        private readonly IPrintedEditionService _printedEditionService;

        public PrintedEditionController(IPrintedEditionService printedEditionService)
        {
            _printedEditionService = printedEditionService;
        }

        [HttpPost]
        public async Task<PageModel> Get([FromBody]SearchParams searchParams)
        {
            return await _printedEditionService.GetSortedAsync(searchParams);
        }

        [HttpPost]
        public async Task Post([FromBody]PrintedEditionModel model)
        {
            await _printedEditionService.CreateAsync(model);
        }
        [HttpGet("{id}")]
        public async Task<PrintedEditionModel> GetById(int id)
        {
            return await _printedEditionService.GetByIdAsync(id);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
