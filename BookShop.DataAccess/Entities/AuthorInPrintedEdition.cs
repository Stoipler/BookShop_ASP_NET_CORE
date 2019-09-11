using BookShop.DataAccess.Entities.Interfaces;
using System;
using System.ComponentModel.DataAnnotations;

namespace BookShop.DataAccess.Entities
{
    public class AuthorInPrintedEdition : IBaseEntity
    {
        [Key]
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public int PrintedEditionId { get; set; }
        public System.DateTime Date { get; set; }
        private DateTime _creationDate;
        public DateTime CreationDate
        {
            get
            {
                return _creationDate;
            }
            set
            {
                _creationDate = DateTime.Now;
            }
        }
        public bool IsRemoved { get; set; }
    }
}
