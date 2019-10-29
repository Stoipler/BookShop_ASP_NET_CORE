using BookShop.BusinessLogic.Models.UserModels;
using BookShop.DataAccess.Entities;
using System;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class MessageModel
    {
        public int ChatId { get; set; }
        public int UserId { get; set; }
        public UserModel UserModel { get; set; }
        public string Content { get; set; }
        public DateTime CreationDate { get; set; }

        public MessageModel()
        {

        }
        internal MessageModel(Message entity) : this()
        {
            Content = entity.Content;
            ChatId = entity.ChatId;
            UserId = entity.ApplicationUserId;
            CreationDate = entity.CreationDate;
            if (!(entity.ApplicationUser is null))
            {
                UserModel = new UserModel(entity.ApplicationUser);
            }
        }

        internal Message MapToEntity()
        {
            Message entity = new Message();

            entity.ChatId = ChatId;
            entity.ApplicationUserId = UserId;
            entity.Content = Content;

            return entity;
        }
    }
}
