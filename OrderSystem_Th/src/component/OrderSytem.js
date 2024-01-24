import React, { memo, useEffect, useState} from 'react';
import axios from 'axios';
import "./OrderSytem.scss";

const OrderSystemPage = () =>{
const [orderId, setOrderId] = useState("");
const [itemCode, setItemCode] = useState("");
const [itemName, setItemName] = useState("");
const [itemQty, setItemQty] = useState("");
const [orderDelivery, setOrderDelivery] = useState("");
const [orderAddress, setOrderAddress] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [orders, setOrder] = useState([]);
 

  
useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    
    const result = await axios.get("https://localhost:7169/api/Order/GetOrder");
    setOrder(result.data);
    console.log(result.data);
  }
 
  async function save(event) {
   
    event.preventDefault();
    try {
      await axios.post("https://localhost:7169/api/Order", {
        
        itemCode: itemCode,
        itemName: itemName,
        itemQty: itemQty,
        orderDelivery: orderDelivery,
        orderAddress: orderAddress,
        phoneNumber: phoneNumber,
       
      });
      alert("Lưu Thông tin");
          setOrderId("");
          setItemCode("");
          setItemName("");
          setItemQty("");
          setOrderDelivery("");
          setOrderAddress("");
          setPhoneNumber("");
      Load();
      alert("Lưu Thông Tin Thành Công");
    } catch (err) {
      alert(err);
    }
  }
  async function editOrder(orders) {
    setItemCode(orders.itemCode);
    setItemName(orders.itemName);
    setItemQty(orders.itemQty);
    setOrderDelivery(orders.orderDelivery);
    setOrderAddress(orders.orderAddress);
    setPhoneNumber(orders.phoneNumber);
   
 
    setOrderId(orders.orderId);
  }

  async function update(event) {
    event.preventDefault();
    try {
  await axios.patch("https://localhost:7169/api/Order/"+ orders.find((u) => u.orderId === orderId).orderId || orderId,
        {
        orderId: orderId,
        itemCode: itemCode,
        itemName: itemName,
        itemQty: itemQty,
        orderDelivery: orderDelivery,
        orderAddress: orderAddress,
        phoneNumber: phoneNumber,
        }
      );
      alert("Update Order");
      setOrderId("");
      setItemCode("");
      setItemName("");
      setItemQty("");
      setOrderDelivery("");
      setOrderAddress("");
      setPhoneNumber("");
     
      Load();
      alert("Update Order successfully.");
    } catch (err) {
      alert(err);
    }
  }
    return (

        <div class="container">
        <form id="contactus" action="" method="post">
            
            <h3>Contact us form</h3>

            <fieldset> 
                <input
                type="text"
                class="form-control"
                id="preson_id"
                hidden
                value={orderId}
                onChange={(event) => {
                    setOrderId(event.target.value);
                }} 
                /> 
            </fieldset>
            <fieldset> 
                <input placeholder="ItemCode" type="text" id="name"
                value={itemCode}
                onChange={(event) => {
                setItemCode(event.target.value);
                }} tabindex="3" required />
            </fieldset>
            <fieldset> 
                <input placeholder="Full Name" type="text" id="name"
                value={itemName}
                onChange={(event) => {
                setItemName(event.target.value);
                }} tabindex="3" required />
            </fieldset>
            <fieldset> 
                <input placeholder="Quantity" type="number" id="address"
              value={itemQty}
              onChange={(event) => {
                setItemQty(event.target.value);
              }} tabindex="3" required/> 
            </fieldset>
            <fieldset> 
                <textarea placeholder="OrderDelivery" id="message"
              value={orderDelivery}
              onChange={(event) => {
                setOrderDelivery(event.target.value);
              }} ></textarea> 
            </fieldset>
            <fieldset> 
                <textarea placeholder="Address" id="message"
              value={orderAddress}
              onChange={(event) => {
                setOrderAddress(event.target.value);
              }} ></textarea> 
            </fieldset>
            <fieldset> 
                <input placeholder="Phone Number" type="tel" id="phone"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }} tabindex="3" required/>
            </fieldset>
           
            <fieldset> 
                <button name="submit" type="submit" id="contactus-submit" data-submit="...Sending" onClick={save}><i id="icon" class=""></i> Send Now</button>
            </fieldset>
        </form>
    </div>
    )
}
export default memo(OrderSystemPage);