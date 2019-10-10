namespace BookShop.DataAccess.Models.RequestParameters
{
    public class OrderRequestParameters
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public string KeyWord { get; set; }
        public OrderRequestParameters()
        {
            Page = 1;
            PageSize = 10;
            KeyWord = string.Empty;
        }
    }
}
