using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("ApplicationRoles")]
    public class ApplicationRole : MongoIdentityRole<string>
    {
    }
}
