using BookShop.DataAccess.Models.RequestParameters;

namespace BookShop.BusinessLogic.Models.OrderModels
{
    public class OrdersRequestModel
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string KeyWord { get; set; }
        public OrderRequestParameters MapToRequestParameters()
        {
            OrderRequestParameters parameters = new OrderRequestParameters();
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
