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

        public async Task<Chat> GetByUserNameAsync(string userName)
        {
            Chat chat = await _dbSet.FirstOrDefaultAsync(item => item.Name == userName);
            return chat;
        }

        public async Task<List<ChatWithNestedObjects>> GetWithNestedObjectsAsync()
        {
            IQueryable<ChatWithNestedObjects> chatsWithNestedObjects = _dbSet.GroupJoin(_context.Messages.Include(item => item.ApplicationUser),
                outerKeySelector => outerKeySelector.Id,
                innerKeySelector => innerKeySelector.ChatId,
                (chat, message) => new ChatWithNestedObjects
                {
                    Chat = chat,
                    Messages = message.ToList()
                });

            List<ChatWithNestedObjects> result = await chatsWithNestedObjects.ToListAsync();

            return result;
        }
    }
}
