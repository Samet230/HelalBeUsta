using AutoRepair.Domain.Entities;
using AutoRepair.Infrastructure.Data;
using BuildingBlocks.Result;
using MediatR;

namespace AutoRepair.Features.Jobs.CreateJob;

public class CreateJobHandler : IRequestHandler<CreateJobCommand, Result<Guid>>
{
    private readonly AutoRepairDbContext _dbContext;

    public CreateJobHandler(AutoRepairDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<Guid>> Handle(CreateJobCommand request, CancellationToken cancellationToken)
    {
        // 1. Entity oluştur
        var job = new Job(
            request.ShopId,
            request.CustomerId,
            request.Vehicle,
            request.ProblemDescription
        );

        // 2. Varsa diğer özellikleri set et (Approve öncesi Draft gibi düşünülebilir, ama şimdilik doğrudan oluşturuyoruz)
        if (request.EstimatedCost.HasValue)
        {
            // Normalde bu Approve adımında olur ama MVP'de oluştururken de girilebilir mi? 
            // Şimdilik sadece ana özellikleri alalım. Entity constructor'da kurallar var.
        }

        // 3. Veritabanına ekle
        _dbContext.Jobs.Add(job);
        await _dbContext.SaveChangesAsync(cancellationToken);

        // 4. ID döndür
        return Result<Guid>.Success(job.Id);
    }
}
