using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderSystem.Models;

namespace OrderSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderDbContext _context;

        public OrderController(OrderDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult<OrderModel> PlaceOrder(OrderModel order)
        {
            _context.OrdersTbl.Add(order);
            _context.SaveChanges();
            return Ok(order);
        }

        [HttpPut("{orderId}")]
        public ActionResult<OrderModel> EditOrder(int orderId, OrderModel updatedOrder)
        {
            var order = _context.OrdersTbl.Find(orderId);

            if (order == null)
            {
                return NotFound();
            }

            // Update relevant fields
            order.OrderDelivery = updatedOrder.OrderDelivery;
            order.OrderAddress = updatedOrder.OrderAddress;

            _context.SaveChanges();
            return Ok(order);
        }

        [HttpGet]
        [Route("GetOrder")]
        public async Task<IEnumerable<OrderModel>> GetOrder()
        {
            return await _context.OrdersTbl.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<OrderModel>> GetOrder(int id)
        {
            var orders = await _context.OrdersTbl.FindAsync(id);

            if (orders == null)
            {
                return NotFound();
            }

            return orders;
        }
    }
}

