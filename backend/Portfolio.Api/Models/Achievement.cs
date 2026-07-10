namespace Portfolio.Api.Models;

public class Achievement
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public string Category { get; set; } = "";
    public string? DateLabel { get; set; }
    public int DisplayOrder { get; set; }
}
