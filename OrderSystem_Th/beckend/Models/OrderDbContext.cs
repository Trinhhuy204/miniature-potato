using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;

namespace OrderSystem.Models
{
    public class OrderDbContext : DbContext
    {
        public OrderDbContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<OrderModel> OrdersTbl { get; set; }

        internal Task CreateAsync(IdentityUser user, string password)
        {
            throw new NotImplementedException();
        }
    }
}
