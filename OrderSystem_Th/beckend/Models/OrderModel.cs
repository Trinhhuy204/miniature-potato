using System.ComponentModel.DataAnnotations;

namespace OrderSystem.Models
{
    public class OrderModel
    {
        [Key]
        public int OrderId { get; set; }
        public string ItemCode { get; set; }
        public string ItemName { get; set; }
        public int ItemQty { get; set; }
        public string OrderDelivery { get; set; }
        public string OrderAddress { get; set; }
        public string PhoneNumber { get; set; }
    }
}
