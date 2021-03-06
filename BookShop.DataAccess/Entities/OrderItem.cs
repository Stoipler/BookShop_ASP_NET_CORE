﻿using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations.Schema;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class OrderItem : BaseEntity
    {
        public decimal Amount { get; set; }
        public Currency Currency { get; set; }
        public int Count { get; set; }
        [ForeignKey("PrintedEdition")]
        public int PrintedEditionId { get; set; }
        [Computed]
        public PrintedEdition PrintedEdition { get; set; }
    }
}
