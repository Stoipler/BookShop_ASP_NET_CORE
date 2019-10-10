using BookShop.BusinessLogic.AuthorModels;
using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.AuthorModels
{
    public class AuthorResponseModel
    {
        public int Count { get; set; }
        public List<AuthorModel> AuthorsList { get; set; }
    }
}
