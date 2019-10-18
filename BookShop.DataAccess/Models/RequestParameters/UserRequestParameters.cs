using static BookShop.DataAccess.Common.Constants.DataAccessConstants;

namespace BookShop.DataAccess.Models.RequestParameters
{
    public class UserRequestParameters
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int Skip
        {
            get
            {
                return (Page - 1) * PageSize;
            }
        }
        public string KeyWord { get; set; }
        public UserRequestParameters()
        {
            Page = DefaultPageNumber;
            PageSize = DefaultPageSize;
            KeyWord = string.Empty;
        }
    }
}
