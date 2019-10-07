using BookShop.BusinessLogic.PrintedEditionModels;
using BookShop.DataAccess.Entities;
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
        internal AuthorModel(Author author)
        {
            Id = author.Id;
            Name = author.Name;
        }
        public AuthorModel()
        {
        }
    }
}
