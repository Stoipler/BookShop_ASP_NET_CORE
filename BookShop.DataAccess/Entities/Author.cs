using System.Collections.Generic;

namespace BookShop.DataAccess.Entities
{
    public class Author:BaseEntity
    {
        public string Name { get; set; }
        public List<AuthorInBook> AuthorInBooks { get; set; }
    }
}
