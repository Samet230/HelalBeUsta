namespace BuildingBlocks.Result;

public class Result<T>
{
    public bool IsSuccess { get; }
    public T? Data { get; }
    public string? ErrorMessage { get; }
    public string? ErrorCode { get; }

    protected Result(bool isSuccess, T? data, string? errorMessage, string? errorCode)
    {
        IsSuccess = isSuccess;
        Data = data;
        ErrorMessage = errorMessage;
        ErrorCode = errorCode;
    }

    public static Result<T> Success(T data)
    {
        return new Result<T>(true, data, null, null);
    }

    public static Result<T> Failure(string errorMessage, string errorCode = "Error")
    {
        return new Result<T>(false, default, errorMessage, errorCode);
    }
}

// Void dönüşler için non-generic versiyon
public class Result
{
    public bool IsSuccess { get; }
    public string? ErrorMessage { get; }
    public string? ErrorCode { get; }

    protected Result(bool isSuccess, string? errorMessage, string? errorCode)
    {
        IsSuccess = isSuccess;
        ErrorMessage = errorMessage;
        ErrorCode = errorCode;
    }

    public static Result Success() => new Result(true, null, null);
    public static Result Failure(string errorMessage, string errorCode = "Error") => new Result(false, errorMessage, errorCode);
}
