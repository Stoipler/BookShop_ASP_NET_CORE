namespace BookShop.DataAccess.Common
{
    public partial class Enums
    {
        public partial class EntityFields
        {
            public enum PrintedEditionType
            {
                None = 0,
                Book = 1,
                Journal = 2,
                Newspaper = 3
            }
            public enum Status
            {
                None = 0,
                Paid = 1,
                Unpaid = 2
            }
            public enum Currency
            {
                None = 0,
                USD = 1,
                UAH = 2,
                EUR = 3
            }
            public enum SortCriteria
            {
                None = 0,
                PriceAsc = 1,
                PriceDesc = 2,
                CurrencyAsc = 3,
                CurrencyDesc = 4
            }
            public enum DiscountType
            {
                None = 0,
                ForPrintedEditions = 1,
                ForAuthors = 2,
                Global = 3
            }
        }
    }
}
