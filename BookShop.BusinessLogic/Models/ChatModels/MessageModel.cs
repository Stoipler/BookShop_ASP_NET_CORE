using BookShop.DataAccess.Entities;
using System;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class MessageModel
    {
        public int ChatId { get; set; }
        public int UserId { get; set; }
        public string Content { get; set; }
        public DateTime CreationDate { get; set; }

        public MessageModel()
        {

        }
        internal MessageModel(Message entity) : this()
        {
            Content = entity.Content;
            ChatId = entity.ChatId;
            UserId = entity.UserId;
            CreationDate = entity.CreationDate;
        }

        internal Message MapToEntity()
        {
            Message entity = new Message();

            entity.ChatId = ChatId;
            entity.UserId = UserId;
            entity.Content = Content;

            return entity;
        }
    }
}
