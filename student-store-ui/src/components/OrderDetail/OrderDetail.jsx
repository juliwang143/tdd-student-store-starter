import * as React from "react";
import "./OrderDetail.css";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function OrderDetail({ order, orderId, showDescription }) {
  return (
    <Link to={`/orders/${orderId}`} className="order-links">
      <div className="header" id="order-header">
        <div className="header-row column-header spacer" id="order-header">
          <span className="flex-2 order-row">{order.name}</span>
          <span className="center order-row">{order.email}</span>
          <span className="center order-row">${order.total}</span>
        </div>

        {showDescription && order.receipt && (
          <div classId="order-receipt-row">
            {order.receipt.map((element) => {
              return (
                <div key={order.itemId} class="receipt-div">
                  <span class="receipt-name">Name: {element.name}</span>
                  <span class="receipt-quantity">
                    Quantity: {element.quantity}
                  </span>
                  <span class="receipt-price">Price: {element.price}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Link>
  );
}
