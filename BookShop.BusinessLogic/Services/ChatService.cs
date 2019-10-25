using BookShop.BusinessLogic.Models.ChatModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class ChatService : IChatService
    {
        private readonly IChatRepository _chatRepository;
        public ChatService(IChatRepository chatRepository)
        {
            _chatRepository = chatRepository;
        }

        public async Task<ChatListModel> GetChatListAsync()
        {
            List<ChatWithNestedObjects> chatsWithNestedObjects = await _chatRepository.GetWithNestedObjectsAsync();
            ChatListModel chatListModel = new ChatListModel();
            chatListModel.ChatModels = chatsWithNestedObjects.Select(item => new ChatModel(item)).ToList();

            return chatListModel;
        }

        public async Task<string> GetChatNameAsync(string userName)
        {
            Chat chat = await _chatRepository.GetByUserNameAsync(userName);
            if (chat is null)
            {
                chat = new Chat { Name = userName };
                await _chatRepository.CreateAsync(chat);
            }
            return chat.Name;
        }
    }
}
