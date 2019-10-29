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
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List<PrintedEditionModel> PrintedEditionModels { get; set; }

        public AuthorModel()
        {
        }
        internal AuthorModel(Author author) : this()
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
        internal Author MapToEntity()
        {
            Author entity = new Author { Id = Id, Name = Name };
            return entity;
        }
    }
}
