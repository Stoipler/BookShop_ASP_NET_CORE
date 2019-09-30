using BookShop.DataAccess.Entities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BookShop.BusinessLogic.Models
{
    public class AuthorModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List<PrintedEditionModel> PrintedEditionModels { get; set; }
        public AuthorModel(Author author)
        {
            Id = author.Id;
            Name = author.Name;
            PrintedEditionModels = author.AuthorInBooks.Select(item => new PrintedEditionModel(item.PrintedEdition)).ToList();
        }
        public AuthorModel()
        {
        }
    }
}
