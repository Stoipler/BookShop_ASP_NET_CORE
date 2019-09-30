using BookShop.DataAccess.Entities;
using System.Collections.Generic;

namespace BookShop.DataAccess.Models
{
    public class AuthorSearchParams
    {
        public string Name { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public List<Author> AuthorsList { get; set; }
    }
}
