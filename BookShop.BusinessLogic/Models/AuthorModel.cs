using BookShop.DataAccess.Entities;
using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models
{
    public class AuthorModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public AuthorModel(Author author)
        {
            Id = author.Id;
            Name = author.Name;
        }
        public AuthorModel()
        {
        }
    }
}
