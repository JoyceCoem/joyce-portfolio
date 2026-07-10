using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public class PortfolioDbContext : DbContext
{
    public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : base(options) { }

    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Achievement> Achievements => Set<Achievement>();
    public DbSet<ResearchProject> ResearchProjects => Set<ResearchProject>();
    public DbSet<Certification> Certifications => Set<Certification>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
}
