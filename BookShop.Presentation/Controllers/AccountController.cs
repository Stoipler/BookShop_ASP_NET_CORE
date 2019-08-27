using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookShop.BusinessLogic.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BookShop.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly SignInManager<UserModel> _singInManager;

        public AccountController(UserManager<UserModel> userManager, SignInManager<UserModel> signInManager)
        {
            this._userManager = userManager;
            this._singInManager = signInManager;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }
    }
}