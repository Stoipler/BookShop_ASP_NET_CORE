using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Common
{
    public class EmailService
    {
        public async Task SendEmailAsync(string userEmail,string userFirstName)
        {
            var apiKey = Environment.GetEnvironmentVariable("API_KEY");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("BookShopStoipler@gmail.com", "Admin");
            var subject = "Sending with SendGrid is Fun";
            var to = new EmailAddress(userEmail, userFirstName);
            var plainTextContent = "and easy to do anywhere, even with C#";
            var htmlContent = "<strong>and easy to do anywhere, even with C#</strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }
    }
}