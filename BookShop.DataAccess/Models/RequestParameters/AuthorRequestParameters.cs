using BookShop.DataAccess.Entities;
using System.Collections.Generic;

namespace BookShop.DataAccess.Models
{
    public class AuthorRequestParameters
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string Name { get; set; }
        public bool WithPagination { get; set; }
        public List<Author> IgnoreAuthorsList { get; set; }
    }
}
