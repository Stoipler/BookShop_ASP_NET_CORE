using System.Collections.Generic;
using BookShop.BusinessLogic.Models.Users;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]")]
    public class RegistrationController : Controller
    {
        private readonly IUserService _userService;

        public RegistrationController(IUserService userService)
        {
            _userService = userService;
        }
        
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<UserModel> Get()
        {
            return _userService.GetAll();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]RegistrationUserModel userModel)
        {
            if (userModel == null)
            {
                return BadRequest();
            }

            _userService.Register(userModel);
            return Ok(userModel);
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
