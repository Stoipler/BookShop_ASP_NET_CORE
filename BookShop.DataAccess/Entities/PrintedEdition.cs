﻿using System.Collections.Generic;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class PrintedEdition: BaseEntity
    {
        public PrintedEdition():base()
        {
            AuthorInBooks = new List<AuthorInBook>();
        }

        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }
        public List<AuthorInBook> AuthorInBooks { get; set; }

    }
}
