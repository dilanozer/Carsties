FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY Carsties.sln ./
COPY src/AuctionService/AuctionService.csproj src/AuctionService/
COPY src/Contracts/Contracts.csproj src/Contracts/

# COPY tests/AuctionService.UnitTests/AuctionService.UnitTests.csproj tests/AuctionService.UnitTests/
# COPY tests/AuctionService.IntegrationTests/AuctionService.IntegrationTests.csproj tests/AuctionService.IntegrationTests/

RUN dotnet restore src/AuctionService/AuctionService.csproj

COPY src/Contracts/ src/Contracts/
COPY src/AuctionService/ src/AuctionService/

RUN dotnet publish src/AuctionService/AuctionService.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "AuctionService.dll"]
