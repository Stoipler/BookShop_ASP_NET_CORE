using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]")]
    public class PrintedEditionController : Controller
    {
        private readonly IPrintedEditionService _printedEditionService;
       
        public PrintedEditionController(IPrintedEditionService printedEditionService)
        {
            _printedEditionService = printedEditionService;
        }

        [HttpGet]
        public async Task<IEnumerable<PrintedEditionModel>> Get()
        {
            return await _printedEditionService.GetAsync();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task Post([FromBody]PrintedEditionModel model)
        {
            await _printedEditionService.CreateAsync(model);
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
