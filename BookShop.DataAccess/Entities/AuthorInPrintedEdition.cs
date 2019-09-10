using BookShop.DataAccess.Entities.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace BookShop.DataAccess.Entities
{
    public class AuthorInPrintedEdition : IBaseEntity
    {
        [Key]
        public int AuthorId { get; set; }
        public int PrintedEditionId { get; set; }
        public System.DateTime Date { get; set; }
    }
}
