using BookShop.BusinessLogic.Models.ChatModels;
using BookShop.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace BookShop.Presentation.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IChatService _chatService;

        public ChatHub(IChatService chatService)
        {
            _chatService = chatService;
        }

        public async Task SendMessage(MessageModel messageModel)
        {
            await Clients.Group("admin").SendAsync("messageRecieve", messageModel);
        }

        public async Task ConnectAsUser()
        {
            string userName = Context.User.Identity.Name;
            string chatName = await _chatService.GetChatNameAsync(userName);
            string connectionId = Context.ConnectionId;

            await Groups.AddToGroupAsync(connectionId, chatName);
        }
        [Authorize(Roles = "admin")]
        public async Task ConnectToChat(string chatName)
        {
            string connectionId = Context.ConnectionId;

            await Groups.AddToGroupAsync(connectionId, chatName);
        }
        [Authorize(Roles = "admin")]
        public async Task ConnectAsAdmin()
        {
            string connectionId = Context.ConnectionId;

            await Groups.AddToGroupAsync(connectionId, "admin");

            ChatListModel chatListModel = await _chatService.GetChatListAsync();

            await Clients.Group("admin").SendAsync("chatListReceive", chatListModel);
        }
    }
}
