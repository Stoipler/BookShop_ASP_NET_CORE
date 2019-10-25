using BookShop.DataAccess.Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    public class Message : BaseEntity
    {
        [ForeignKey("ApplicationUser")]
        public int UserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string Content { get; set; }
        public int ChatId { get; set; }
    }
}
