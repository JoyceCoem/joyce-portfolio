namespace Portfolio.Api.Models;

public class Project
{
    public int Id { get; set; }
    public string Slug { get; set; } = "";
    public string Title { get; set; } = "";
    public string Subtitle { get; set; } = "";
    public string Problem { get; set; } = "";
    public string Solution { get; set; } = "";
    public string Architecture { get; set; } = "";
    public string MyRole { get; set; } = "";
    public string Technologies { get; set; } = "";
    public string Outcome { get; set; } = "";
    public string LessonsLearned { get; set; } = "";
    public string? GitHubUrl { get; set; }
    public string? DemoUrl { get; set; }
    public int DisplayOrder { get; set; }
}
