namespace BookShop.BusinessLogic.Models.AccountModels
{
    public class ForgotPasswordResponseModel
    {
        public string Id { get; set; }
        public string Code { get; set; }
        public bool IsPossibleToUseCurrentEmail { get; set; }
    }
}
