using static BookShop.DataAccess.Common.Constants.DataAccessConstants;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Models.RequestParameters
{
    public class PrintedEditionRequestParameters
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
        public decimal PriceTo { get; set; }
        public decimal PriceFrom { get; set; }
        public SortCriteria SortCriteria { get; set; }
        public PrintedEditionType PrintedEditionType { get; set; }
        public bool WithPagination { get; set; }
        public PrintedEditionRequestParameters()
        {
            Page = DefaultPageNumber;
            PageSize = DefaultPageSize;
            KeyWord = string.Empty;
            PriceTo = decimal.MaxValue;
            WithPagination = true;
        }
    }
}
