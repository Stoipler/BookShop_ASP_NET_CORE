using BookShop.BusinessLogic.Models.ChatModels;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace BookShop.Presentation.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(MessageModel messageModel)
        {
            await Clients.All.SendAsync("messageRecieve", messageModel);
        }
    }
}
