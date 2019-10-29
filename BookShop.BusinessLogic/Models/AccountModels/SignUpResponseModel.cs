﻿using Microsoft.AspNetCore.Identity;

namespace BookShop.BusinessLogic.Models.AccountModels
{
    public class SignUpResponseModel
    {
        public string Id { get; set; }
        public string SignUpToken { get; set; }
        public IdentityResult IdentityResult { get; set; }
    }
}
