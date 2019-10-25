using System.Threading.Tasks;
using BookShop.BusinessLogic.Models.ChatModels;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IChatService
    {
        Task<string> GetChatNameAsync(string userName);
        Task<ChatListModel> GetChatListAsync();
    }
}
