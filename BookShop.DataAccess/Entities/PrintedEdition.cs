using static BookShop.DataAccess.Entities.Enums.Enums.EntityFields;

namespace BookShop.DataAccess.Entities
{
    public class PrintedEdition
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool IsRemoved { get; set; }
        public Status Status { get; set; }
        public Currency Currency { get; set; }
        public PrintedEditionType Type { get; set; }
    }
}
