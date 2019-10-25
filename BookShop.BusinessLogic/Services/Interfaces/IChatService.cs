using System.Threading.Tasks;
using BookShop.BusinessLogic.Models.ChatModels;
using Microsoft.AspNetCore.SignalR;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IChatService
    {
        Task<string> GetChatNameAsync(string userName);
        Task<ChatListModel> GetChatListAsync();
        Task<string> GetChatNameAsync(int chatId);
        Task<ChatModel> GetChatAsync(string chatName);
        Task<ChatModel> CreateMessageAsync(MessageModel messageModel, HubCallerContext context);
    }
}
