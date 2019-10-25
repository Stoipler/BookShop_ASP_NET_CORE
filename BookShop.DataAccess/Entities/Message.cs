using BookShop.DataAccess.Entities.Base;

namespace BookShop.DataAccess.Entities
{
    public class Message : BaseEntity
    {
        public int ChatId { get; set; }
        public int UserId { get; set; }
        public string Content { get; set; }
    }
}
