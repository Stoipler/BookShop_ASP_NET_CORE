using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookShop.BusinessLogic.Models;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AuthorController : Controller
    {
        private readonly IAuthorService _authorService;
        public AuthorController(IAuthorService authorService)
        {
            this._authorService = authorService;
        }

        // GET: api/<controller>
        [HttpPost]
        public async Task<IEnumerable<AuthorModel>> Get([FromBody]AuthorSearchParams searchParams)
        {
            if (!string.IsNullOrWhiteSpace(searchParams.Name))
            {
                searchParams.Name = RemoveWhiteSpacesFromStart(searchParams.Name);
            }
            return await _authorService.GetAsync(searchParams);
        }

        // POST api/<controller>
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

        // PUT api/<controller>/5
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

        // DELETE api/<controller>/5
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
