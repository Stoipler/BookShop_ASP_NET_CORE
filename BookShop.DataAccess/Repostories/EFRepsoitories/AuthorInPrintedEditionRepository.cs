using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class AuthorInPrintedEditionRepository : BaseRepository<AuthorInPrintedEdition>, IAuthorInPrintedEditionRepository
    {
        public AuthorInPrintedEditionRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
