using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.AuthorWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using BookShop.DataAccess.Repostories.MongoDbRepositories.Base;
using BookShop.DataAccess.Utils;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDbGenericRepository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
        {
        }



        public async Task<(List<AuthorWithNestedObjects>, int)> GetWithParamsAsync(AuthorRequestParameters parameters)
        {
            MongoDbPipelineBuilder pipelineBuilder = new MongoDbPipelineBuilder();

            if (!string.IsNullOrWhiteSpace(parameters.Name))
            {
                pipelineBuilder.Match(new BsonDocument {
                    {"$or",new BsonArray{
                        new BsonDocument {{"Name",new BsonDocument{{"$regex",parameters.Name },{"$options","i" }}}}
                    }
                } });
            }
            List<ObjectId> objectIds = parameters.IgnoreAuthorsList.Select(item => new ObjectId(item)).ToList();
            if (parameters.IgnoreAuthorsList.Any())
            {
                pipelineBuilder.Match(new BsonDocument {
                    {"_id",new BsonDocument{
                        {"$nin",new BsonArray(objectIds) } }
                    } 
                });
            }

            pipelineBuilder.Sort(new BsonDocument { { "CreationDate", -1 } });

            int count = default(int);

            if (parameters.WithPagination)
            {
                IAsyncCursor<BsonDocument> countCursor = await _mongoCollection.AggregateAsync<BsonDocument>(pipelineBuilder.Pipeline);
                List<BsonDocument> documentsList = await countCursor.ToListAsync();
                count = documentsList.Count;

                pipelineBuilder.AddExpression(new BsonDocument { { "$skip", parameters.Skip } });
                pipelineBuilder.AddExpression(new BsonDocument { { "$limit", parameters.PageSize } });
            }


            pipelineBuilder.Lookup(new BsonDocument {
                {"from", "AuthorInBooks" },
                { "localField", "_id" },
                { "foreignField", "AuthorId" },
                { "as", "AuthorInBooks" } });
            pipelineBuilder.Set(new BsonDocument {
                    { "Author",new BsonDocument{
                        { "_id", "$_id" },
                        { "CreationDate", "$CreationDate" },
                        { "IsRemoved", "$IsRemoved" },
                        { "Name", "$Name" }}
                    }
            });
            pipelineBuilder.Project(new BsonDocument {
                        { "_id", 0 },
                        { "CreationDate", 0 },
                        { "IsRemoved", 0 },
                        { "Name", 0 }
            });
            pipelineBuilder.AddExpression(new BsonDocument {
                { "$unwind", new BsonDocument {
                    {"path","$AuthorInBooks" },
                    {"preserveNullAndEmptyArrays",true } }
                }
            });
            pipelineBuilder.Lookup(new BsonDocument {
                {"from", "PrintedEditions" },
                { "localField", "AuthorInBooks.PrintedEditionId" },
                { "foreignField", "_id" },
                { "as", "PrintedEdition" }
            });
            pipelineBuilder.AddExpression(new BsonDocument {
                { "$unwind", new BsonDocument {
                    {"path","$PrintedEdition" },
                    {"preserveNullAndEmptyArrays",true } }
                }
            });
            pipelineBuilder.AddFields(new BsonDocument{
                    {"AuthorInBooks.PrintedEdition","$PrintedEdition" }
            });
            pipelineBuilder.Project(new BsonDocument {
                        { "PrintedEdition", 0 }
            });
            pipelineBuilder.Group(new BsonDocument{
                    {"_id","$Author" },
                    { "AuthorInBooks",new BsonDocument{
                        {"$push","$AuthorInBooks" }}
                    }
            });
            pipelineBuilder.Set(new BsonDocument {
                    { "Author","$_id"}
            });
            pipelineBuilder.Project(new BsonDocument {
                        { "_id", 0 }
            });

            pipelineBuilder.AddExpression(new BsonDocument { { "$skip", parameters.Skip } });
            pipelineBuilder.AddExpression(new BsonDocument { { "$limit", parameters.PageSize } });

            IAsyncCursor<AuthorWithNestedObjects> asyncCursor = await _mongoCollection.AggregateAsync<AuthorWithNestedObjects>(pipelineBuilder.Pipeline);
            List<AuthorWithNestedObjects> result = await asyncCursor.ToListAsync();

            return (result, count);
        }
    }
}
