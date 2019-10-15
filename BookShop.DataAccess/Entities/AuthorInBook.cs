using BookShop.DataAccess.Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    public class AuthorInBook : BaseEntity
    {
        [ForeignKey("Author")]
        public int AuthorId { get; set; }
        [ForeignKey("PrintedEdition")]
        public int PrintedEditionId { get; set; }
        public Author Author { get; set; }
        public PrintedEdition PrintedEdition { get; set; }
    }
}
