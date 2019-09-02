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
    [Route("api/[controller]")]
    public class AuthorController : Controller
    {
        private readonly IAuthorService _authorService;
        public AuthorController(IAuthorService authorService)
        {
            this._authorService = authorService;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<IEnumerable<AuthorModel>> Get()
        {
            return await _authorService.GetAsync();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public async Task Post([FromBody]AuthorModel model)
        {
            await _authorService.CreateAsync(model);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
