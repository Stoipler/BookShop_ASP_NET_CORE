using BookShop.DataAccess.Entities;
using System;
using System.Collections.Generic;

namespace BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects
{
    public class PrintedEditionWithNestedObjects
    {
        public PrintedEdition PrintedEdition { get; set; }
        public List<AuthorInBook> AuthorInBooks { get; set; }
        public PrintedEditionWithNestedObjects()
        {
            AuthorInBooks = new List<AuthorInBook>();
        }
    }
}
