using BookShop.DataAccess.Entities;
using System;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class MessageModel
    {
        public string SenderName { get; set; }
        public string Content { get; set; }
        public int ChatId { get; set; }
        public DateTime CreationDate { get; set; }

        public MessageModel()
        {

        }
        internal MessageModel(Message entity) : this()
        {
            Content = entity.Content;
            ChatId = entity.ChatId;
            CreationDate = entity.CreationDate;
        }
    }
}
