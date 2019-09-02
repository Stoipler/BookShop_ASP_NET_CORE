﻿using BookShop.DataAccess.Entities;
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
        public Status Status { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }

        public PrintedEditionModel(PrintedEdition printedEdition)
        {
            Id = printedEdition.Id;
            Name = printedEdition.Name;
            Description = printedEdition.Description;
            Price = printedEdition.Price;
            IsRemoved = printedEdition.IsRemoved;
            Status = printedEdition.Status;
            Currency = printedEdition.Currency;
            Type = printedEdition.Type;
        }
    }
}
