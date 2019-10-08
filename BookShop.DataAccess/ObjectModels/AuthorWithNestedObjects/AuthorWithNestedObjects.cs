using BookShop.DataAccess.Entities;
using System.Collections.Generic;

namespace BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects
{
    public class AuthorWithNestedObjects
    {
        public Author Author { get; set; }
        public List<AuthorInBook> AuthorInBooks { get; set; }
    }
}
