using BookShop.DataAccess.Entities.Base;
using MongoDbGenericRepository.Attributes;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("PrintedEditions")]
    public class PrintedEdition : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }
    }
}
