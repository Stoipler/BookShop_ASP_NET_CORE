using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Common
{
    public class EmailService
    {
        public async Task SendEmailAsync(string userEmail, string messageSubject, string message)
        {
            var apiKey = Environment.GetEnvironmentVariable("API_KEY");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("BookShopStoipler@gmail.com", "Admin");
            var subject = messageSubject;
            var to = new EmailAddress(userEmail, "User");
            var plainTextContent = message;
            var htmlContent ="";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }
    }
}