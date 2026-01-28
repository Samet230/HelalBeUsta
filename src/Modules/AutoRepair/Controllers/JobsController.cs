using AutoRepair.Features.Jobs.CreateJob;
using AutoRepair.Features.Jobs.GetJobById;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AutoRepair.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JobsController : ControllerBase
{
    private readonly IMediator _mediator;

    public JobsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> CreateJob([FromBody] CreateJobCommand command)
    {
        var result = await _mediator.Send(command);

        if (!result.IsSuccess)
        {
            return BadRequest(new { result.ErrorMessage, result.ErrorCode });
        }

        return CreatedAtAction(nameof(GetJobById), new { id = result.Data }, result.Data);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetJobById(Guid id)
    {
        var query = new GetJobByIdQuery(id);
        var result = await _mediator.Send(query);

        if (!result.IsSuccess)
        {
            return NotFound(new { result.ErrorMessage, result.ErrorCode });
        }

        return Ok(result.Data);
    }
}
