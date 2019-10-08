using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.BusinessLogic.PrintedEditionModels
{
    public class PrintedEditionPageModel
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public List<PrintedEditionModel> PrintedEditionModels { get; set; }
        public PrintedEditionPageModel()
        {
            PrintedEditionModels = new List<PrintedEditionModel>();
        }

        public PrintedEditionPageModel(int count, int page, int pageSize, List<PrintedEditionWithNestedObjects> printedEditions)
        {
            CurrentPage = page;
            Count = count;
            PageSize = pageSize;
            PrintedEditionModels = printedEditions.Select(item => new PrintedEditionModel(item)).ToList();
        }
    }
}
