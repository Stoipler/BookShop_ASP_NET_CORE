using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using BookShop.DataAccess.Repostories.Interfaces;
using BookShop.DataAccess.Repostories.MongoDbRepositories.Base;
using BookShop.DataAccess.Utils;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDbGenericRepository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookShop.DataAccess.Common.Enums.EntityFields;

namespace BookShop.DataAccess.Repostories.MongoDbRepositories
{
    public class PrintedEditionRepository : BaseRepository<PrintedEdition>, IPrintedEditionRepository
    {

        public PrintedEditionRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
        {
        }

        public async Task<List<PrintedEdition>> GetRangeByIdAsync(List<string> printedEditionIds)
        {
            List<PrintedEdition> printedEditions = await _mongoCollection.AsQueryable().Where(item => printedEditionIds.Contains(item.Id)).ToListAsync();

            return printedEditions;
        }

        public async Task<(List<PrintedEditionWithNestedObjects>, int)> GetWithNestedObjectsAsync(PrintedEditionRequestParameters requestParameters)
        {
            MongoDbPipelineBuilder pipelineBuilder = new MongoDbPipelineBuilder();
            pipelineBuilder.Lookup(new BsonDocument {
                {"from", "AuthorInBooks" },
                { "localField", "_id" },
                { "foreignField", "PrintedEditionId" },
                { "as", "AuthorInBooks" } });
            pipelineBuilder.Set(new BsonDocument {
                    { "PrintedEdition",new BsonDocument{
                        { "_id", "$_id" },
                        { "CreationDate", "$CreationDate" },
                        { "IsRemoved", "$IsRemoved" },
                        { "Name", "$Name" },
                        { "Description", "$Description" },
                        { "Price", "$Price" },
                        { "Currency", "$Currency" },
                        { "Type", "$Type" }}
                    }});
            pipelineBuilder.Project(new BsonDocument {
                        { "_id", 0 },
                        { "CreationDate", 0 },
                        { "IsRemoved", 0 },
                        { "Name", 0 },
                        { "Description", 0 },
                        { "Price", 0 },
                        { "Currency", 0 },
                        { "Type", 0 }});
            pipelineBuilder.AddExpression(new BsonDocument {
                { "$unwind", new BsonDocument {
                    {"path","$AuthorInBooks" },
                    {"preserveNullAndEmptyArrays",true } }
                }
            });
            pipelineBuilder.Lookup(new BsonDocument {
                {"from", "Authors" },
                { "localField", "AuthorInBooks.AuthorId" },
                { "foreignField", "_id" },
                { "as", "Author" }
            });
            pipelineBuilder.AddExpression(new BsonDocument {
                { "$unwind", new BsonDocument {
                    {"path","$Author" },
                    {"preserveNullAndEmptyArrays",true } }
                }
            });
            pipelineBuilder.AddFields(new BsonDocument{
                    {"AuthorInBooks.Author","$Author" }
            });
            pipelineBuilder.Project(new BsonDocument {
                        { "Author", 0 }
            });
            pipelineBuilder.Group(new BsonDocument{
                    {"_id","$PrintedEdition" },
                    { "AuthorInBooks",new BsonDocument{
                        {"$push","$AuthorInBooks" }}
                    }
            });
            pipelineBuilder.Set(new BsonDocument {
                    { "PrintedEdition","$_id"}
            });
            pipelineBuilder.Project(new BsonDocument {
                        { "_id", 0 }
            });

            pipelineBuilder.Match(new BsonDocument {
                { "PrintedEdition.Price", new BsonDocument {
                    { "$gte", requestParameters.PriceFrom.ToString() },
                    { "$lte", requestParameters.PriceTo.ToString() } }
                }});

            if (!string.IsNullOrWhiteSpace(requestParameters.KeyWord))
            {
                pipelineBuilder.Match(new BsonDocument {
                    {"$or",new BsonArray{
                        new BsonDocument {{"PrintedEdition.Name",new BsonDocument{{"$regex",requestParameters.KeyWord },{"$options","i" }}}},
                        new BsonDocument {{"PrintedEdition.Description",new BsonDocument{{"$regex",requestParameters.KeyWord },{"$options","i" }}}}}
                    }
                });
            }

            if (requestParameters.PrintedEditionType != PrintedEditionType.None)
            {
                pipelineBuilder.Match(new BsonDocument {
                    {"PrintedEdition.Type",requestParameters.PrintedEditionType }
                });
            }

            if (requestParameters.SortCriteria == SortCriteria.PriceAsc)
            {
                pipelineBuilder.Sort(new BsonDocument { { "PrintedEdition.Price", 1 } });
            }
            if (requestParameters.SortCriteria == SortCriteria.PriceDesc)
            {
                pipelineBuilder.Sort(new BsonDocument { { "PrintedEdition.Price", -1 } });
            }
            if (requestParameters.SortCriteria == SortCriteria.CurrencyAsc)
            {
                pipelineBuilder.Sort(new BsonDocument { { "PrintedEdition.Currency", 1 } });
            }
            if (requestParameters.SortCriteria == SortCriteria.CurrencyDesc)
            {
                pipelineBuilder.Sort(new BsonDocument { { "PrintedEdition.Currency", -1 } });
            }
            if (requestParameters.SortCriteria == SortCriteria.None)
            {
                pipelineBuilder.Sort(new BsonDocument { { "PrintedEdition.CreationDate", -1 } });
            }

            IAsyncCursor<BsonDocument> countCursor = await _mongoCollection.AggregateAsync<BsonDocument>(pipelineBuilder.Pipeline);
            List<BsonDocument> documentsList = await countCursor.ToListAsync();
            int count = documentsList.Count;

            pipelineBuilder.AddExpression(new BsonDocument { { "$skip", requestParameters.Skip } });
            pipelineBuilder.AddExpression(new BsonDocument { { "$limit", requestParameters.PageSize } });

            IAsyncCursor<PrintedEditionWithNestedObjects> asyncCursor = await _mongoCollection.AggregateAsync<PrintedEditionWithNestedObjects>(pipelineBuilder.Pipeline);
            List<PrintedEditionWithNestedObjects> result = await asyncCursor.ToListAsync();

            return (result, count);
        }

        public async Task<PrintedEditionWithNestedObjects> GetWithNestedObjectsByIdAsync(string id)
        {
            MongoDbPipelineBuilder pipelineBuilder = new MongoDbPipelineBuilder();

            pipelineBuilder.Match(new BsonDocument { { "_id", new ObjectId(id) } });

            pipelineBuilder.Lookup(new BsonDocument {
                {"from", "AuthorInBooks" },
                { "localField", "_id" },
                { "foreignField", "PrintedEditionId" },
                { "as", "AuthorInBooks" } });
            pipelineBuilder.Set(new BsonDocument {
                    { "PrintedEdition",new BsonDocument{
                        { "_id", "$_id" },
                        { "CreationDate", "$CreationDate" },
                        { "IsRemoved", "$IsRemoved" },
                        { "Name", "$Name" },
                        { "Description", "$Description" },
                        { "Price", "$Price" },
                        { "Currency", "$Currency" },
                        { "Type", "$Type" }}
                    }});
            pipelineBuilder.Project(new BsonDocument {
                        { "_id", 0 },
                        { "CreationDate", 0 },
                        { "IsRemoved", 0 },
                        { "Name", 0 },
                        { "Description", 0 },
                        { "Price", 0 },
                        { "Currency", 0 },
                        { "Type", 0 }});
            pipelineBuilder.AddExpression(new BsonDocument {
                { "$unwind", new BsonDocument {
                    {"path","$AuthorInBooks" },
                    {"preserveNullAndEmptyArrays",true } }
                }
            });
            pipelineBuilder.Lookup(new BsonDocument {
                {"from", "Authors" },
                { "localField", "AuthorInBooks.AuthorId" },
                { "foreignField", "_id" },
                { "as", "Author" }
            });
            pipelineBuilder.AddExpression(new BsonDocument {
                { "$unwind", new BsonDocument {
                    {"path","$Author" },
                    {"preserveNullAndEmptyArrays",true } }
                }
            });
            pipelineBuilder.AddFields(new BsonDocument{
                    {"AuthorInBooks.Author","$Author" }
            });
            pipelineBuilder.Project(new BsonDocument {
                        { "Author", 0 }
            });
            pipelineBuilder.Group(new BsonDocument{
                    {"_id","$PrintedEdition" },
                    { "AuthorInBooks",new BsonDocument{
                        {"$push","$AuthorInBooks" }}
                    }
            });
            pipelineBuilder.Set(new BsonDocument {
                    { "PrintedEdition","$_id"}
            });
            pipelineBuilder.Project(new BsonDocument {
                        { "_id", 0 }
            });

            IAsyncCursor<PrintedEditionWithNestedObjects> asyncCursor = await _mongoCollection.AggregateAsync<PrintedEditionWithNestedObjects>(pipelineBuilder.Pipeline);
            PrintedEditionWithNestedObjects printedEdition = await asyncCursor.FirstOrDefaultAsync();

            return printedEdition;
        }
    }
}
