using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Models
{
    public class SearchParams
    {
        public PrintedEditionType PrintedEditionType { get; set; }
        public SortCriteria SortCriteria { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }

        public SearchParams()
        {
            PrintedEditionType = PrintedEditionType.None;
            SortCriteria = SortCriteria.None;
            PriceFrom = 0;
            PriceTo = decimal.MaxValue;
            Page = 1;
            PageSize = 6;
        }
    }
}
