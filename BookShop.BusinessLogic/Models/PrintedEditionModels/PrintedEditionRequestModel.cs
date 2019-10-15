using BookShop.DataAccess.Models.RequestParameters;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.BusinessLogic.PrintedEditionModels
{
    public class PrintedEditionRequestModel
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string KeyWord { get; set; }
        public decimal PriceTo { get; set; }
        public decimal PriceFrom { get; set; }
        public SortCriteria SortCriteria { get; set; }
        public PrintedEditionType PrintedEditionType { get; set; }

        internal PrintedEditionRequestParameters MapToRequestParameters()
        {
            PrintedEditionRequestParameters parameters = new PrintedEditionRequestParameters();
            if (Page != 0)
            {
                parameters.Page = Page;
            }
            if (PageSize != 0)
            {
                parameters.PageSize = PageSize;
            }
            if (!string.IsNullOrWhiteSpace(KeyWord))
            {
                parameters.KeyWord = KeyWord;
            }
            if (PriceFrom != 0)
            {
                parameters.PriceFrom = PriceFrom;
            }
            if (PriceTo != 0)
            {
                parameters.PriceTo = PriceTo;
            }
            if (SortCriteria != SortCriteria.None)
            {
                parameters.SortCriteria = SortCriteria;
            }
            if (PrintedEditionType != PrintedEditionType.None)
            {
                parameters.PrintedEditionType = PrintedEditionType;
            }
            return parameters;
        }
    }
}
