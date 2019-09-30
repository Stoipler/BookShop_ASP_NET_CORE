using BookShop.DataAccess.Entities;
using System.Collections.Generic;
using System.Linq;
using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.BusinessLogic.Models
{
    public class PrintedEditionModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool IsRemoved { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }
        public List<AuthorModel> AuthorModels { get; set; }
        public PrintedEditionModel(PrintedEdition printedEdition)
        {
            Id = printedEdition.Id;
            Name = printedEdition.Name;
            Description = printedEdition.Description;
            Price = printedEdition.Price;
            IsRemoved = printedEdition.IsRemoved;
            Currency = printedEdition.Currency;
            Type = printedEdition.Type;
            AuthorModels = printedEdition.AuthorInBooks.Select(item => new AuthorModel() { Id = item.AuthorId, Name = item.Author.Name }).ToList();
        }
        public PrintedEditionModel() { }
    }
}
