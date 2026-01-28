using AutoRepair.Domain.Enums;
using AutoRepair.Domain.ValueObjects;
using BuildingBlocks.Domain;
using BuildingBlocks.Result;

namespace AutoRepair.Domain.Entities;

public class Job : BaseEntity, IAggregateRoot
{
    public Guid ShopId { get; private set; }
    public Guid CustomerId { get; private set; }
    public JobStatus Status { get; private set; }
    public CarInfo Vehicle { get; private set; }
    public decimal? EstimatedCost { get; private set; }
    public string? ProblemDescription { get; private set; }

    // EF Core için boş constructor
    private Job() { }

    public Job(Guid shopId, Guid customerId, CarInfo vehicle, string problemDescription)
    {
        Id = Guid.NewGuid();
        CreatedAt = DateTimeOffset.UtcNow;
        ShopId = shopId;
        CustomerId = customerId;
        Status = JobStatus.Pending;
        Vehicle = vehicle;
        ProblemDescription = problemDescription;
        
        // TODO: Domain Event fırlatılabilir (JobCreatedDomainEvent)
    }

    // İş Mantığı Metotları (Rich Domain Model)

    public Result Approve(decimal estimatedCost)
    {
        if (Status != JobStatus.Pending)
            return Result.Failure("Job must be in Pending status to be approved.", "InvalidStatusChange");

        if (estimatedCost <= 0)
            return Result.Failure("Estimated cost must be greater than zero.", "InvalidCost");

        Status = JobStatus.Approved;
        EstimatedCost = estimatedCost;
        UpdatedAt = DateTimeOffset.UtcNow;
        return Result.Success();
    }

    public Result StartWork()
    {
        if (Status != JobStatus.Approved && Status != JobStatus.PartsWaiting)
            return Result.Failure("Job must be Approved or Waiting for Parts to start work.", "InvalidStatusChange");

        Status = JobStatus.InProgress;
        UpdatedAt = DateTimeOffset.UtcNow;
        return Result.Success();
    }

    public Result WaitForParts()
    {
        if (Status != JobStatus.InProgress)
            return Result.Failure("Only jobs in progress can be set to waiting for parts.", "InvalidStatusChange");

        Status = JobStatus.PartsWaiting;
        UpdatedAt = DateTimeOffset.UtcNow;
        return Result.Success();
    }

    public Result Complete()
    {
        if (Status != JobStatus.InProgress)
            return Result.Failure("Job must be In Progress to complete.", "InvalidStatusChange");

        Status = JobStatus.Completed;
        UpdatedAt = DateTimeOffset.UtcNow;
        return Result.Success();
    }
}
