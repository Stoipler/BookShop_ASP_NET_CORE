using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    public class AuthorInBook : BaseEntity
    {
        [ForeignKey("Author")]
        public string AuthorId { get; set; }
        [ForeignKey("PrintedEdition")]
        public string PrintedEditionId { get; set; }
        [Computed]
        public Author Author { get; set; }
        [Computed]
        public PrintedEdition PrintedEdition { get; set; }
    }
}
