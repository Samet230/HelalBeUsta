using BuildingBlocks.Result;
using MediatR;

namespace AutoRepair.Features.Jobs.GetJobById;

public record GetJobByIdQuery(Guid JobId) : IRequest<Result<JobDto>>;
