using System;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class MessageModel
    {
        public string SenderName { get; set; }
        public string Message { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
