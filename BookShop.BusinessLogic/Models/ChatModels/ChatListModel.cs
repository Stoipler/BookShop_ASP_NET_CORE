using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class ChatListModel
    {
        public List<ChatModel> ChatModels { get; set; }

        public ChatListModel()
        {
            ChatModels = new List<ChatModel>();
        }
    }
}
