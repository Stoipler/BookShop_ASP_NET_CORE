using BookShop.DataAccess.Models.RequestParameters;
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
            if (Page != default(int))
            {
                parameters.Page = Page;
            }
            if (PageSize != default(int))
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
                parameters.IgnoreAuthorsList = IgnoreAuthorsList.Select(item => item.Id).ToList();
            }
            return parameters;
        }
    }
}
