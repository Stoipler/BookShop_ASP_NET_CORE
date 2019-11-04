using MongoDB.Bson;
using System.Collections.Generic;

namespace BookShop.DataAccess.Utils
{
    public class MongoDbPipelineBuilder
    {
        private List<BsonDocument> _bsonElements;

        public BsonDocument[] Pipeline { get { return _bsonElements.ToArray(); } }

        public MongoDbPipelineBuilder()
        {
            _bsonElements = new List<BsonDocument>();
        }

        public void Match(BsonDocument document)
        {
            _bsonElements.Add(new BsonDocument { { "$match", document } });
        }
        public void Lookup(BsonDocument document)
        {
            _bsonElements.Add(new BsonDocument { { "$lookup", document } });
        }
        public void Set(BsonDocument document)
        {
            _bsonElements.Add(new BsonDocument { { "$set", document } });
        }
        public void Project(BsonDocument document)
        {
            _bsonElements.Add(new BsonDocument { { "$project", document } });
        }
        public void Sort(BsonDocument document)
        {
            _bsonElements.Add(new BsonDocument { { "$sort", document } });
        }
        public void AddFields(BsonDocument document)
        {
            _bsonElements.Add(new BsonDocument { { "$addFields", document } });
        }
        public void Group(BsonDocument document)
        {
            _bsonElements.Add(new BsonDocument { { "$group", document } });
        }
        public void AddExpression(BsonDocument document)
        {
            _bsonElements.Add(document);
        }

    }
}
