using BookShop.DataAccess.Entities.Interfaces;

namespace BookShop.DataAccess.Entities
{
    public class Author:IBaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
