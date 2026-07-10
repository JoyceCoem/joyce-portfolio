namespace Portfolio.Api.Models;

public class Certification
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Issuer { get; set; } = "";
    public string? CredentialUrl { get; set; }
    public bool InProgress { get; set; }
    public int DisplayOrder { get; set; }
}
