using AutoRepair.Domain.Enums;
using AutoRepair.Domain.ValueObjects;

namespace AutoRepair.Features.Jobs.GetJobById;

public record JobDto(
    Guid Id,
    Guid ShopId,
    Guid CustomerId,
    string Status,
    CarInfo Vehicle,
    string? ProblemDescription,
    decimal? EstimatedCost,
    DateTimeOffset CreatedAt,
    DateTimeOffset? UpdatedAt
);
