using System.Collections.Generic;
using System.Threading.Tasks;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.ObjectModels.ChatWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces.Base;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IChatRepository : IGenericRepository<Chat>
    {
        Task<Chat> GetByUserNameAsync(string userName);
        Task<List<ChatWithNestedObjects>> GetWithNestedObjectsAsync();
    }
}
