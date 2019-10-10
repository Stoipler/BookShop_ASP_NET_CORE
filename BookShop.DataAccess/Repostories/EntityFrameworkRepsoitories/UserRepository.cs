﻿using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.EFRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EFRepsoitories
{
    public class UserRepository : BaseRepository<ApplicationUser>, IUserRepository
    {
        public UserRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<ApplicationUser> users, int count)> GetUsersAsync(UserRequestParameters parameters)
        {
            IQueryable<ApplicationUser> users = _dbSet;
            if (!string.IsNullOrWhiteSpace(parameters.KeyWord))
            {
                users = users.Where(item =>
                item.FirstName.Contains(parameters.KeyWord) ||
                item.LastName.Contains(parameters.KeyWord) ||
                item.Email.Contains(parameters.KeyWord) ||
                item.UserName.Contains(parameters.KeyWord));
            }
            int count = await users.CountAsync();
            int countToSkip = (--parameters.Page) * parameters.PageSize;
            users = users.Skip(countToSkip).Take(parameters.PageSize);
            List<ApplicationUser> response = await users.ToListAsync();
            return (response, count);
        }
    }
}
