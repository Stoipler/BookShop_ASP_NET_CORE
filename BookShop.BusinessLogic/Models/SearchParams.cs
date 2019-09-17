using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.BusinessLogic.Models
{
    public class SearchParams
    {
        public PrintedEditionType PrintedEditionType { get; set; }
        public SortCriteria SortCriteria { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }

    }
}
