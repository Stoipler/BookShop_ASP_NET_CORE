using BookShop.BusinessLogic.Models.OrderModels;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.Payments
{
    public class PaymentDataRequestModel
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public string StripeEmail { get; set; }
        [Required]
        public string StripeToken { get; set; }
        [Required]
        public List<CartItemModel> CartItemModels { get; set; }
    }
}
