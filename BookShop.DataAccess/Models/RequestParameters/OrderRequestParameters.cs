using static BookShop.DataAccess.Common.Constants.DataAccessConstants;

namespace BookShop.DataAccess.Models.RequestParameters
{
    public class OrderRequestParameters
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string KeyWord { get; set; }
        public OrderRequestParameters()
        {
            Page = DefaultPageNumber;
            PageSize = DefaultPageSize;
            KeyWord = string.Empty;
        }
    }
}
