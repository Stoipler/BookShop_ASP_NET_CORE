using BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.BusinessLogic.Models.ChatModels
{
    public class ChatListModel
    {
        public int UncheckedChatsCount { get; set; }
        public List<ChatModel> ChatModels { get; set; }

        public ChatListModel()
        {
            ChatModels = new List<ChatModel>();
        }
        internal ChatListModel(List<ChatWithNestedObjects> chatsWithNestedObjects) : this()
        {
            ChatModels = chatsWithNestedObjects.Select(item => new ChatModel(item)).ToList();
            UncheckedChatsCount = chatsWithNestedObjects.Where(item => item.Chat.IsCheckedByAdmin == false).Count();
        }
    }
}
