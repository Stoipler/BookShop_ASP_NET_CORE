using BookShop.DataAccess.Models.RequestParameters;
using System.Collections.Generic;
using System.Linq;
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
        public bool WithPagination { get; set; }
        public List<PrintedEditionModel> PrintedEditionIgnoreList { get; set; }

        internal PrintedEditionRequestParameters MapToRequestParameters()
        {
            PrintedEditionRequestParameters parameters = new PrintedEditionRequestParameters();
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
            if (PriceFrom != default(int))
            {
                parameters.PriceFrom = PriceFrom;
            }
            if (PriceTo != default(int))
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
            if (WithPagination != true)
            {
                parameters.WithPagination = WithPagination;
            }
            bool condition = !(PrintedEditionIgnoreList is null) && PrintedEditionIgnoreList.Any();
            if (condition)
            {
                parameters.PrintedEditionIgnoreList = PrintedEditionIgnoreList.Select(item => item.Id).ToList();
            }
            return parameters;
        }
    }
}
