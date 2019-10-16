using BookShop.BusinessLogic.AuthorModels;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using System.Collections.Generic;
using System.Linq;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.BusinessLogic.PrintedEditionModels
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
        public PrintedEditionModel()
        {
        }
        internal PrintedEditionModel(PrintedEdition entity) : this()
        {
            Id = entity.Id;
            Name = entity.Name;
            Description = entity.Description;
            Price = entity.Price;
            IsRemoved = entity.IsRemoved;
            Currency = entity.Currency;
            Type = entity.Type;
        }

        internal PrintedEditionModel(PrintedEditionWithNestedObjects printedEdition) : this(printedEdition.PrintedEdition)
        {
            if (!(printedEdition.AuthorInBooks is null))
            {
                AuthorModels = printedEdition.AuthorInBooks.Select(item => new AuthorModel(item.Author)).ToList();
            }
        }

        internal PrintedEdition MapToEntity(PrintedEdition entity = null)
        {
            if (entity is null)
            {
                entity = new PrintedEdition();
            }
            entity.Name = Name;
            entity.Description = Description;
            entity.Price = Price;
            entity.IsRemoved = IsRemoved;
            entity.Currency = Currency;
            entity.Type = Type;
            return entity;
        }
    }
}
