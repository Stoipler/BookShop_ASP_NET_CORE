using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class ChatModel
    {
        private ChatWithNestedObjects item;

        public int Id { get; set; }
        public string Name { get; set; }
        public List<MessageModel> MessageModels { get; set; }

        public ChatModel()
        {
            MessageModels = new List<MessageModel>();
        }
        internal ChatModel(Chat entity) : this()
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        internal ChatModel(ChatWithNestedObjects item):this(item.Chat)
        {
            MessageModels = item.Messages.Select(message => new MessageModel(message)).ToList();
        }
    }
}
