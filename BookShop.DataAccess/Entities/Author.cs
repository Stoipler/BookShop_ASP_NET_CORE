using System.Collections.Generic;

namespace BookShop.DataAccess.Entities
{
    public class Author:BaseEntity
    {
        public string Name { get; set; }
        public Author():base()
        {
        }
    }
}
