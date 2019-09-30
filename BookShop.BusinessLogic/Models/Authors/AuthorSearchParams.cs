using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models
{
    public class AuthorSearchParams
    {
        public string Name { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public List<AuthorModel> AuthorsList { get; set; }
    }
}
