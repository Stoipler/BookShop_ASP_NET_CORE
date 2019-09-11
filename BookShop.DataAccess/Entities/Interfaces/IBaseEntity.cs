using System;

namespace BookShop.DataAccess.Entities.Interfaces
{
    public interface IBaseEntity
    {
        int Id { get; set; }
        DateTime CreationDate { get; set; }
        bool IsRemoved { get; set; }
    }
}
