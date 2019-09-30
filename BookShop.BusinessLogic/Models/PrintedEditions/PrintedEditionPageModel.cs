using System;
using System.Collections.Generic;
using System.Text;

namespace BookShop.BusinessLogic.Models
{
    public class PrintedEditionPageModel
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public IEnumerable<PrintedEditionModel> PrintedEditionModels { get; set; }
    }
}
