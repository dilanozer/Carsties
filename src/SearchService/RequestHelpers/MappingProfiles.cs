using AutoMapper;
using Contracts.DTOs;
using SearchService.Models;

namespace SearchService.RequestHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AuctionCreated, Item>();
            CreateMap<AuctionUpdated, Item>(); 
            CreateMap<AuctionDeleted, Item>();
        }
    }
}