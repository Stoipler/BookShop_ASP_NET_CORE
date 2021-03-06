﻿using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.Interfaces.Base;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.Interfaces
{
    public interface IOrderRepository : IGenericRepository<Order>
    {
        Task<List<Order>> GetRangeByUserId(int id);
        Task<(List<Order>, int)> GetByParmeters(OrderRequestParameters parameters);
    }
}
