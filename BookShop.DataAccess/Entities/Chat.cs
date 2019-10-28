using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    public class Chat : BaseEntity
    {
        public string Name { get; set; }
        public bool IsCheckedByAdmin { get; set; }
        [ForeignKey("Message")]
        public int? MessageId { get; set; }
        [Computed]
        public Message Message { get; set; }
    }
}
