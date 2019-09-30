using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models
{
    public class AuthorPageModel
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public IEnumerable<AuthorModel> AuthorModels { get; set; }
    }
}
