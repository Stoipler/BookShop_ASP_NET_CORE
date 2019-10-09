using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Models
{
    public class PrintedEditionRequestParameters
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string KeyWord { get; set; }
        public decimal PriceTo { get; set; }
        public decimal PriceFrom { get; set; }
        public SortCriteria SortCriteria { get; set; }
        public PrintedEditionType PrintedEditionType { get; set; }
        public PrintedEditionRequestParameters()
        {
            Page = 1;
            PageSize = 6;
            KeyWord = string.Empty;
            PriceTo = decimal.MaxValue;
            PriceFrom = 0;
            SortCriteria = SortCriteria.None;
            PrintedEditionType = PrintedEditionType.None;
        }
    }
}
