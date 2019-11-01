using BookShop.DataAccess.Entities.Base;
using MongoDbGenericRepository.Attributes;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("Authors")]
    public class Author : BaseEntity
    {
        public string Name { get; set; }
    }
}
