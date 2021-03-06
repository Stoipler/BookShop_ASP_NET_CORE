﻿using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.EntityFrameworkRepsoitories
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<AuthorWithNestedObjects>, int)> GetWithParamsAsync(AuthorRequestParameters parameters)
        {
            IQueryable<AuthorWithNestedObjects> authors = _dbSet.GroupJoin(_context.AuthorInBooks.Include(item => item.PrintedEdition),
                outerKeySelector => outerKeySelector.Id,
              innerKeySelector => innerKeySelector.AuthorId,
              (author, authorInBooks) => new AuthorWithNestedObjects
              {
                  Author = author,
                  AuthorInBooks = authorInBooks.ToList()
              });

            if (!string.IsNullOrWhiteSpace(parameters.Name))
            {
                authors = authors.Where(item => item.Author.Name.Contains(parameters.Name, StringComparison.OrdinalIgnoreCase));
            }

            if (parameters.IgnoreAuthorsList.Any())
            {
                authors = authors.Where(item => !parameters.IgnoreAuthorsList.Contains(item.Author.Id));
            }

            authors = authors.OrderByDescending(item => item.Author.CreationDate);

            int count = default(int);

            if (parameters.WithPagination)
            {
                count = await authors.CountAsync();
                int skipCount = (--parameters.Page) * parameters.PageSize;
                authors = authors.Skip(skipCount).Take(parameters.PageSize);
            }

            List<AuthorWithNestedObjects> result = await authors.AsNoTracking().ToListAsync();

            return (result, count);
        }

    }
}
