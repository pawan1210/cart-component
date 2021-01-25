import React, { Component } from "react";
import "./OrderTotal.css";

class OrderTotal extends Component {
  render() {
    var total_amount = 0;
    var discount = 0;
    var type_discount = 0;
    var order_total = 0;
    this.props.items_list.forEach((item) => {
      total_amount += item.quantity * item.price;
      discount += (item.discount / 100) * item.quantity * item.price;
      if (item.type === "fiction") {
        type_discount = 10;
        discount += (10 / 100) * item.quantity * item.price;
      }
    });
    order_total = total_amount - discount - type_discount;
    return (
      <div className="checkout-div">
        <div className="header">Total</div>
        <div className="total-price">
          <span>items({this.props.items_list.length})</span>
          <span>:${total_amount.toFixed(2)}</span>
        </div>
        <div className="discount">
          <div>
            <span>Discount</span>
            <span>:-${discount.toFixed(2)}</span>
          </div>
          <div>
            <span>Type Discount</span>
            <span>:-${type_discount.toFixed(2)}</span>
          </div>
        </div>

        <div className="order-total">
          <span>Order Total</span>
          <span>:${order_total.toFixed(2)}</span>
        </div>
      </div>
    );
  }
}

export default OrderTotal;
