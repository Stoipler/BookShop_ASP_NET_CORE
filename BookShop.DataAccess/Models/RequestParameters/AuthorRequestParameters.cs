using BookShop.DataAccess.Entities;
using System.Collections.Generic;
using static BookShop.DataAccess.Common.Constants.DataAccessConstants;


namespace BookShop.DataAccess.Models.RequestParameters
{
    public class AuthorRequestParameters
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string Name { get; set; }
        public bool WithPagination { get; set; }
        public List<Author> IgnoreAuthorsList { get; set; }
        public AuthorRequestParameters()
        {
            Page = DefaultPageNumber;
            PageSize = DefaultPageSize;
            Name = string.Empty;
        }
    }
}
