using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Common
{
    public class EmailHelper
    {
        public async Task SendEmailAsync(string userEmail, string messageSubject, string message)
        {
            string apiKey = Environment.GetEnvironmentVariable("SendGridApiKey");
            string senderEmail = Environment.GetEnvironmentVariable("SendGridEmail");
            string senderName = Environment.GetEnvironmentVariable("SendGridSenderName");
            SendGridClient client = new SendGridClient(apiKey);
            EmailAddress senderInfo = new EmailAddress(senderEmail, senderName);
            EmailAddress receiverInfo = new EmailAddress(userEmail, "User");
            string subject = messageSubject;
            string plainTextContent = string.Empty;
            string htmlContent = message;

            SendGridMessage sendGridMessage = MailHelper.CreateSingleEmail(senderInfo, receiverInfo, subject, plainTextContent, htmlContent);
            await client.SendEmailAsync(sendGridMessage);
        }
    }
}