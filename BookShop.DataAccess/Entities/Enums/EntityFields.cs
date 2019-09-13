namespace BookShop.DataAccess.Entities.Enums
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
                PriceAsc,
                PriceDesc,
                CurrencyAsc,
                CurrencyDesc
            }
        }
    }
}
