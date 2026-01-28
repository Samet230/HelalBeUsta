$solutionName = "TamirSepeti"
$baseDir = "c:\Users\smt1s\OneDrive\Belgeler\GitHub\TamirSepeti"

# Ensure clean slate
if (Test-Path "$baseDir/$solutionName.sln") {
    Write-Host "Solution already exists. Skipping creation."
} else {
    dotnet new sln -n $solutionName -o $baseDir
}

# Create Folder Structure
New-Item -ItemType Directory -Force -Path "$baseDir/src/API"
New-Item -ItemType Directory -Force -Path "$baseDir/src/BuildingBlocks"
New-Item -ItemType Directory -Force -Path "$baseDir/src/Modules/AutoRepair"

# 1. API (Host)
if (-not (Test-Path "$baseDir/src/API/API.csproj")) {
    dotnet new webapi -n API -o "$baseDir/src/API" --framework net8.0
    dotnet sln "$baseDir/$solutionName.sln" add "$baseDir/src/API/API.csproj"
}

# 2. BuildingBlocks (Shared Kernel)
if (-not (Test-Path "$baseDir/src/BuildingBlocks/BuildingBlocks.csproj")) {
    dotnet new classlib -n BuildingBlocks -o "$baseDir/src/BuildingBlocks" --framework net8.0
    dotnet sln "$baseDir/$solutionName.sln" add "$baseDir/src/BuildingBlocks/BuildingBlocks.csproj"
}

# 3. AutoRepair Module (Domain Only for now)
if (-not (Test-Path "$baseDir/src/Modules/AutoRepair/AutoRepair.csproj")) {
    dotnet new classlib -n AutoRepair -o "$baseDir/src/Modules/AutoRepair" --framework net8.0
    dotnet sln "$baseDir/$solutionName.sln" add "$baseDir/src/Modules/AutoRepair/AutoRepair.csproj"
}

# Add References
# API references everything
dotnet add "$baseDir/src/API/API.csproj" reference "$baseDir/src/BuildingBlocks/BuildingBlocks.csproj"
dotnet add "$baseDir/src/API/API.csproj" reference "$baseDir/src/Modules/AutoRepair/AutoRepair.csproj"

# Modules reference BuildingBlocks
dotnet add "$baseDir/src/Modules/AutoRepair/AutoRepair.csproj" reference "$baseDir/src/BuildingBlocks/BuildingBlocks.csproj"

Write-Host "Scaffolding completed!"
