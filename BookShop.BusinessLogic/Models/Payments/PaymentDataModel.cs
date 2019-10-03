using System.ComponentModel.DataAnnotations;

namespace BookShop.BusinessLogic.Models.Payments
{
    public class PaymentDataModel
    {
        [Required]
        public string StripeEmail{get;set;}
        [Required]
        public string StripeToken{get;set;}
    }
}
