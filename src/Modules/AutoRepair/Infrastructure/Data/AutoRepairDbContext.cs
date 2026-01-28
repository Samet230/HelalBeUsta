using AutoRepair.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace AutoRepair.Infrastructure.Data;

public class AutoRepairDbContext : DbContext
{
    public AutoRepairDbContext(DbContextOptions<AutoRepairDbContext> options) : base(options)
    {
    }

    public DbSet<Job> Jobs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // repair şemasını tanımla
        modelBuilder.HasDefaultSchema("repair");
        
        // PostGIS eklentisini aktif et
        // PostGIS eklentisi geçici olarak devre dışı (User Request: Skip)
        // modelBuilder.HasPostgresExtension("postgis");

        // Konfigürasyonları uygula
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AutoRepairDbContext).Assembly);
    }
}
