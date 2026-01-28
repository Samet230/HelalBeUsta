using AutoRepair.Domain.ValueObjects;
using BuildingBlocks.Result;
using MediatR;

namespace AutoRepair.Features.Jobs.CreateJob;

public record CreateJobCommand(
    Guid ShopId,
    Guid CustomerId,
    CarInfo Vehicle,
    string? ProblemDescription,
    decimal? EstimatedCost) : IRequest<Result<Guid>>;
