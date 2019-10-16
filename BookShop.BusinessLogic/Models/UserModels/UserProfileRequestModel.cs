using BookShop.DataAccess.Models.RequestParameters;

namespace BookShop.BusinessLogic.Models.UserModels
{
    public class UserRequestModel
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string KeyWord { get; set; }
        public UserRequestParameters MapToRequestParameters()
        {
            UserRequestParameters parameters = new UserRequestParameters();
            if (Page != default(int))
            {
                parameters.Page = Page;
            }
            if (PageSize != default(int))
            {
                parameters.PageSize = PageSize;
            }
            if (!string.IsNullOrWhiteSpace(KeyWord))
            {
                parameters.KeyWord = KeyWord;
            }
            return parameters;
        }
    }
}
