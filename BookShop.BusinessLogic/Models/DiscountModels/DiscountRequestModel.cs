using BookShop.DataAccess.Models.RequestParameters;

namespace BookShop.BusinessLogic.Models.DiscountModels
{
    public class DiscountRequestModel
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string KeyWord { get; set; }

        internal DiscountRequestParameters MapToRequestParameters()
        {
            DiscountRequestParameters parameters = new DiscountRequestParameters();

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

            return parameters;
        }
    }
}
