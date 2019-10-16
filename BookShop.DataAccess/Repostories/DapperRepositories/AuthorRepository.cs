﻿using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<AuthorWithNestedObjects>, int)> GetWithParamsAsync(AuthorRequestParameters authorSearchParams)
        {
            int count = default(int);
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template countGetter = sqlBuilder.AddTemplate($@"SELECT * FROM Authors
            LEFT JOIN AuthorInBooks ON Authors.Id = AuthorInBooks.AuthorId
            LEFT JOIN PrintedEditions ON PrintedEditions.Id = AuthorInBooks.PrintedEditionId
            ");
            List<AuthorWithNestedObjects> result = new List<AuthorWithNestedObjects>();
            await _connection.QueryAsync<Author, AuthorInBook, PrintedEdition, Author>(countGetter.RawSql,
                (author, authorInBook, printedEdition) =>
                {
                    AuthorWithNestedObjects authorWithNestedObjects = result.FirstOrDefault(item => item.Author.Id == author.Id);

                    if (authorWithNestedObjects is null)
                    {
                        authorWithNestedObjects = new AuthorWithNestedObjects();
                        authorWithNestedObjects.Author = author;
                        result.Add(authorWithNestedObjects);
                    }

                    if (!(authorInBook is null))
                    {
                        authorInBook.PrintedEdition = printedEdition;
                        authorWithNestedObjects.AuthorInBooks.Add(authorInBook);
                    }

                    return author;
                });

            return (result, count);
        }
    }
}
