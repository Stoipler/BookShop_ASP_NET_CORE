using BookShop.DataAccess.Entities.Base;
using Dapper.Contrib.Extensions;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookShop.DataAccess.Entities
{
    [CollectionName("AuthorInBooks")]
    public class AuthorInBook : BaseEntity
    {
        [ForeignKey("Author")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string AuthorId { get; set; }
        [ForeignKey("PrintedEdition")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string PrintedEditionId { get; set; }
        [Computed]
        public Author Author { get; set; }
        [Computed]
        public PrintedEdition PrintedEdition { get; set; }
    }
}
