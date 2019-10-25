using BookShop.BusinessLogic.Models.ChatModels;
using BookShop.BusinessLogic.Services.Interfaces;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services
{
    public class ChatService : IChatService
    {
        private readonly IChatRepository _chatRepository;
        private readonly IMessageRepository _messageRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        public ChatService(IChatRepository chatRepository, IMessageRepository messageRepository, UserManager<ApplicationUser> userManager)
        {
            _chatRepository = chatRepository;
            _messageRepository = messageRepository;
            _userManager = userManager;
        }

        public async Task<ChatModel> CreateMessageAsync(MessageModel messageModel, HubCallerContext context)
        {
            ApplicationUser user = await _userManager.FindByNameAsync(context.User.Identity.Name);
            Message message = messageModel.MapToEntity();
            await _messageRepository.CreateAsync(message);

            string chatName = await GetChatNameAsync(message.ChatId);
            ChatModel chatModel = await GetChatAsync(chatName);

            return chatModel;
        }

        public async Task<ChatModel> GetChatAsync(string chatName)
        {
            ChatWithNestedObjects chatWithNestedObjects = await _chatRepository.GetByNameAsync(chatName);
            ChatModel chatModel = new ChatModel(chatWithNestedObjects);

            return chatModel;
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
            ChatWithNestedObjects chatWithNestedObjects = await _chatRepository.GetByNameAsync(userName);
            Chat chat = chatWithNestedObjects.Chat;
            if (chat is null)
            {
                chat = new Chat { Name = userName };
                await _chatRepository.CreateAsync(chat);
            }
            return chat.Name;
        }
        public async Task<string> GetChatNameAsync(int chatId)
        {
            Chat chat = await _chatRepository.GetByIdAsync(chatId);

            return chat.Name;
        }
    }
}
