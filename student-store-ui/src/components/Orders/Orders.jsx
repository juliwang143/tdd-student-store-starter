import * as React from "react";
import "./Orders.css";
import axios from "axios";
import OrderDetail from "../OrderDetail/OrderDetail";
import "./Orders.css";

export default function Orders({ orders, setOrders }) {
  console.log("in order component");
  console.log(orders);

  return (
    <div id="orders" className="orders">
      <div className="spacer"></div>
      <div className="content">
        <h3>Orders</h3>

        {orders.length !== 0 && (
          <div className="wrapper">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
            <div className="grid">
              {orders.map((element) => {
                return (
                  <OrderDetail
                    order={element.purchase}
                    key={element.purchase.id}
                  ></OrderDetail>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
