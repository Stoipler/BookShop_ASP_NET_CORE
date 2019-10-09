using System.Collections.Generic;

namespace BookShop.BusinessLogic.AuthorModels
{
    public class AuthorPageModel
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public List<AuthorModel> AuthorModels { get; set; }
    }
}
