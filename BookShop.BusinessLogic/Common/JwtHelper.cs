using BookShop.DataAccess.Entities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BookShop.BusinessLogic.Common
{
    public class JwtHelper
    {
        private readonly AppSettings _appSettings;
        public JwtHelper(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }
        public string GenerateAccessToken(ApplicationUser user, string userRole)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.ASCII.GetBytes(_appSettings.Secret);

            List<Claim> claims = new List<Claim>() { new Claim(ClaimTypes.Name, user.UserName.ToString()) };

            if (!string.IsNullOrWhiteSpace(userRole))
            {
                claims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            string result = tokenHandler.WriteToken(token);

            return result;
        }
    }
    public class AppSettings
    {
        public string Secret { get; set; }
    }
}
