using AutoRepair.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AutoRepair.Infrastructure.Data.Configurations;

public class JobConfiguration : IEntityTypeConfiguration<Job>
{
    public void Configure(EntityTypeBuilder<Job> builder)
    {
        builder.HasKey(j => j.Id);

        // Value Object'i JSONB sütununa map etme
        builder.OwnsOne(j => j.Vehicle, vehicleBuilder =>
        {
            vehicleBuilder.ToJson(); // PostgreSQL JSONB
        });

        // Enum'ı string olarak kaydetme (Böylece DB'de okumak kolay olur)
        builder.Property(j => j.Status)
            .HasConversion<string>();

        builder.ToTable("Jobs", "repair"); // repair şeması
    }
}
