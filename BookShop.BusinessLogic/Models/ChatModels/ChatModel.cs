using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class ChatModel
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsCheckedByAdmin { get; set; }
        public MessageModel LastMessageModel { get; set; }
        public List<MessageModel> MessageModels { get; set; }

        public ChatModel()
        {
            MessageModels = new List<MessageModel>();
        }
        internal ChatModel(Chat entity) : this()
        {
            Id = entity.Id;
            Name = entity.Name;
            if (!(entity.Message is null))
            {
                LastMessageModel = new MessageModel(entity.Message);
            }
            IsCheckedByAdmin = entity.IsCheckedByAdmin;
        }

        internal ChatModel(ChatWithNestedObjects item) : this(item.Chat)
        {
            MessageModels = item.Messages.Select(message => new MessageModel(message)).ToList();
        }

    }
}
