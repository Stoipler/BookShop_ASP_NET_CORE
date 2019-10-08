using BookShop.BusinessLogic.PrintedEditionModels;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BookShop.BusinessLogic.AuthorModels
{
    public class AuthorModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List<PrintedEditionModel> PrintedEditionModels { get; set; }
        internal AuthorModel(Author author)
        {
            Id = author.Id;
            Name = author.Name;
        }
        internal AuthorModel(AuthorWithNestedObjects item) : this(item.Author)
        {
            if (!(item.AuthorInBooks is null))
            {
                PrintedEditionModels = item.AuthorInBooks.Select(authorInBook => new PrintedEditionModel(authorInBook.PrintedEdition)).ToList();
            }
        }
        public AuthorModel()
        {
        }
    }
}
