using BookShop.DataAccess.ObjectModels.PrintedEditionWithNestedObjects;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.BusinessLogic.PrintedEditionModels
{
    public class PrintedEditionResponseModel
    {
        public int Count { get; set; }
        public List<PrintedEditionModel> PrintedEditionModels { get; set; }
        public PrintedEditionResponseModel()
        {
            PrintedEditionModels = new List<PrintedEditionModel>();
        }

        public PrintedEditionResponseModel(int count, List<PrintedEditionWithNestedObjects> printedEditions)
        {
            Count = count;
            PrintedEditionModels = printedEditions.Select(item => new PrintedEditionModel(item)).ToList();
        }
    }
}
