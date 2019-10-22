using BookShop.BusinessLogic.PrintedEditionModels;
using System.Collections.Generic;

namespace BookShop.BusinessLogic.Models.DiscountModels
{
    public class DiscountCreationModel
    {
        public DiscountModel DiscountModel { get; set; }
        public List<PrintedEditionModel> PrintedEditionModels { get; set; }

        public DiscountCreationModel()
        {
            PrintedEditionModels = new List<PrintedEditionModel>();
        }
    }
}
