using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResearchController : ControllerBase
{
    private readonly PortfolioDbContext _db;
    public ResearchController(PortfolioDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll() =>
        Ok(await _db.ResearchProjects.OrderBy(r => r.DisplayOrder).ToListAsync());

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetBySlug(string slug)
    {
        var research = await _db.ResearchProjects.FirstOrDefaultAsync(r => r.Slug == slug);
        return research is null ? NotFound() : Ok(research);
    }
}
