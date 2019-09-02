using BookShop.BusinessLogic.Models.User;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet]
        public async Task<IEnumerable<UserModel>> Get()
        {
            return await _userService.GetAsync();
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]UserCreateModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _userService.CreateAsync(model);
                if (result.Succeeded)
                {
                    return Ok(model);
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }
            return BadRequest(ModelState);
        }

        //public async Task<IActionResult> Edit(string id)
        //{
        //    User user = await _userManager.FindByIdAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }
        //    EditUserViewModel model = new EditUserViewModel { Id = user.Id, Email = user.Email, Year = user.Year };
        //    return View(model);
        //}

        //[httppost]
        //public async task<iactionresult> edit(edituserviewmodel model)
        //{
        //    if (modelstate.isvalid)
        //    {
        //        user user = await _usermanager.findbyidasync(model.id);
        //        if (user != null)
        //        {
        //            user.email = model.email;
        //            user.username = model.email;
        //            user.year = model.year;

        //            var result = await _usermanager.updateasync(user);
        //            if (result.succeeded)
        //            {
        //                return redirecttoaction("index");
        //            }
        //            else
        //            {
        //                foreach (var error in result.errors)
        //                {
        //                    modelstate.addmodelerror(string.empty, error.description);
        //                }
        //            }
        //        }
        //    }
        //    return view(model);
        //}

        //[HttpPost]
        //public async Task<ActionResult> Delete(string id)
        //{
        //    User user = await _userManager.FindByIdAsync(id);
        //    if (user != null)
        //    {
        //        IdentityResult result = await _userManager.DeleteAsync(user);
        //    }
        //    return RedirectToAction("Index");
        //}

    }
}
