using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Data;
using Portfolio.Api.Models;

namespace Portfolio.Api.Controllers;

public record ContactRequest(string Name, string Email, string Message);

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly PortfolioDbContext _db;
    public ContactController(PortfolioDbContext db) => _db = db;

    [HttpPost]
    public async Task<IActionResult> Submit(ContactRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) ||
            string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Message))
        {
            return BadRequest(new { error = "Name, email, and message are all required." });
        }

        _db.ContactMessages.Add(new ContactMessage
        {
            Name = request.Name,
            Email = request.Email,
            Message = request.Message
        });
        await _db.SaveChangesAsync();
        return Ok(new { success = true });
    }
}
