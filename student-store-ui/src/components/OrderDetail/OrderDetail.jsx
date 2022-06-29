import * as React from "react";
import "./OrderDetail.css";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function OrderDetail({ order, orderId, showDescription }) {
  return (
    // working
    // <div className="header">
    //   <div className="header-row">
    //     <span className="flex-2 order-row">{order.name}</span>
    //     <span className="center order-row">{order.email}</span>
    //     <span className="center order-row">${order.total}</span>
    //   </div>
    // </div>

    <Link to={`/orders/${orderId}`} className="order-links">
      <div className="header" id="order-header">
        <div className="header-row column-header" id="order-header">
          <span className="flex-2 order-row">{order.name}</span>
          <span className="center order-row">{order.email}</span>
          <span className="center order-row">${order.total}</span>
        </div>

        {showDescription && order.order && (
          <div>
            {order.order.map((element) => {
              return (
                <div key={order.id}>
                  <span>Item: {element.item}</span>
                  <span>Quantity: {element.quantity}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Link>
  );
}
