using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly PortfolioDbContext _db;
    public ProjectsController(PortfolioDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll() =>
        Ok(await _db.Projects.OrderBy(p => p.DisplayOrder).ToListAsync());

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetBySlug(string slug)
    {
        var project = await _db.Projects.FirstOrDefaultAsync(p => p.Slug == slug);
        return project is null ? NotFound() : Ok(project);
    }
}
