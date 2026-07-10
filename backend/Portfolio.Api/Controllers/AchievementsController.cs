using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AchievementsController : ControllerBase
{
    private readonly PortfolioDbContext _db;
    public AchievementsController(PortfolioDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll() =>
        Ok(await _db.Achievements.OrderBy(a => a.DisplayOrder).ToListAsync());
}
