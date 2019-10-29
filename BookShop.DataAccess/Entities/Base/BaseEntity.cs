using BookShop.DataAccess.Entities.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace BookShop.DataAccess.Entities.Base
{
    public class BaseEntity : IBaseEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsRemoved { get; set; }
        public BaseEntity()
        {
            CreationDate = DateTime.UtcNow;
        }
    }
}
