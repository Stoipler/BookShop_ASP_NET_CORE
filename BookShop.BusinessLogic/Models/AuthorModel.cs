using BookShop.DataAccess.Entities;

namespace BookShop.BusinessLogic.Models
{
    public class AuthorModel
    {
        public int Id { get; set; }
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
