namespace Portfolio.Api.Models;

public class ResearchProject
{
    public int Id { get; set; }
    public string Slug { get; set; } = "";
    public string Title { get; set; } = "";
    public string Context { get; set; } = "";
    public string Supervisor { get; set; } = "";
    public string Abstract { get; set; } = "";
    public string Objectives { get; set; } = "";
    public string Methodology { get; set; } = "";
    public string Technologies { get; set; } = "";
    public string KeyFindings { get; set; } = "";
    public int DisplayOrder { get; set; }
}
