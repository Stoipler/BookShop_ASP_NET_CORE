using BookShop.DataAccess.Entities;
using System.Collections.Generic;

namespace BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects
{
    public class ChatWithNestedObjects
    {
        public Chat Chat { get; set; }
        public List<Message> Messages { get; set; }
    }
}
