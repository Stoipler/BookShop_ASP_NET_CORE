﻿using BookShop.BusinessLogic.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookShop.BusinessLogic.Services.Interfaces
{
    public interface IPrintedEditionService
    {
        Task<PageModel> GetSortedAsync(SearchParams searchParams);
        Task CreateAsync(PrintedEditionModel model);
        Task Update(PrintedEditionModel model);
        Task Remove(PrintedEditionModel model);
        Task<IEnumerable<PrintedEditionModel>> GetAsync();
    }
}
