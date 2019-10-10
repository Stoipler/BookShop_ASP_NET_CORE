using BookShop.DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.BusinessLogic.AuthorModels
{
    public class AuthorRequestModel
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string Name { get; set; }
        public bool WithPagination { get; set; }
        public List<AuthorModel> IgnoreAuthorsList { get; set; }

        public AuthorRequestParameters MapToRequestParameters()
        {
            AuthorRequestParameters parameters = new AuthorRequestParameters();
            if (Page != 0)
            {
                parameters.Page = Page;
            }
            if (PageSize != 0)
            {
                parameters.PageSize = PageSize;
            }
            if (!string.IsNullOrWhiteSpace(Name))
            {
                parameters.Name = Name;
            }
            parameters.WithPagination = WithPagination;
            if (!(IgnoreAuthorsList is null))
            {
                parameters.IgnoreAuthorsList = IgnoreAuthorsList.Select(item => item.MapToEntity()).ToList();
            }
            return parameters;
        }
    }
}
