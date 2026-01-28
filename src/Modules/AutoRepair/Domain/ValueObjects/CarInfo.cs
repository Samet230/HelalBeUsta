namespace AutoRepair.Domain.ValueObjects;

// Value Object - Immutable
public record CarInfo(string Plate, string Brand, string Model, int Year, string Color)
{
    public override string ToString() => $"{Plate} - {Brand} {Model} ({Year})";
}
