using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class ChatRepository : BaseRepository<Chat>, IChatRepository
    {
        public ChatRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<ChatWithNestedObjects> GetByNameAsync(string userName)
        {
            IQueryable<ChatWithNestedObjects> chatsWithNestedObjects = _dbSet.Include(item => item.Message).GroupJoin(_context.Messages,
                outerKeySelector => outerKeySelector.Id,
                innerKeySelector => innerKeySelector.ChatId,
                (chat, message) => new ChatWithNestedObjects
                {
                    Chat = chat,
                    Messages = message.ToList()
                });
            ChatWithNestedObjects chatWithNestedObjects = await chatsWithNestedObjects.FirstOrDefaultAsync(item => item.Chat.Name == userName);
            return chatWithNestedObjects;
        }

        public async Task<List<ChatWithNestedObjects>> GetWithNestedObjectsAsync()
        {
            IQueryable<ChatWithNestedObjects> chatsWithNestedObjects = _dbSet.Include(item => item.Message).GroupJoin(_context.Messages,
                outerKeySelector => outerKeySelector.Id,
                innerKeySelector => innerKeySelector.ChatId,
                (chat, message) => new ChatWithNestedObjects
                {
                    Chat = chat,
                    Messages = message.ToList()
                });
            chatsWithNestedObjects = chatsWithNestedObjects.OrderByDescending(item => item.Chat.Message.CreationDate);
            List<ChatWithNestedObjects> result = await chatsWithNestedObjects.ToListAsync();

            return result;
        }
    }
}
