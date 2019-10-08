using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace BookShop.Presentation
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .UseWebRoot(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dist"))
                .UseStartup<Startup>();
    }
}
