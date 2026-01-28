using AutoRepair.Infrastructure.Data;
using BuildingBlocks.Result;
using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AutoRepair.Features.Jobs.GetJobById;

public class GetJobByIdHandler : IRequestHandler<GetJobByIdQuery, Result<JobDto>>
{
    private readonly AutoRepairDbContext _dbContext;

    public GetJobByIdHandler(AutoRepairDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<JobDto>> Handle(GetJobByIdQuery request, CancellationToken cancellationToken)
    {
        var job = await _dbContext.Jobs
            .AsNoTracking()
            .FirstOrDefaultAsync(j => j.Id == request.JobId, cancellationToken);

        if (job is null)
        {
            return Result<JobDto>.Failure("Job not found", "NotFound");
        }

        // Mapster ile otomatik mapping (veya manuel)
        var dto = job.Adapt<JobDto>();

        return Result<JobDto>.Success(dto);
    }
}
