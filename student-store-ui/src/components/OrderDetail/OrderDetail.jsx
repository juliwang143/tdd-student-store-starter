import * as React from "react";
import "./OrderDetail.css";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function OrderDetail({ order, orderId }) {
  return (
    // working
    // <div className="header">
    //   <div className="header-row">
    //     <span className="flex-2 order-row">{order.name}</span>
    //     <span className="center order-row">{order.email}</span>
    //     <span className="center order-row">${order.total}</span>
    //   </div>
    // </div>

    <Link to={`/orders/${orderId}`}>
      <div className="header">
        <div className="header-row">
          <span className="flex-2 order-row">{order.name}</span>
          <span className="center order-row">{order.email}</span>
          <span className="center order-row">${order.total}</span>
        </div>
      </div>
    </Link>
  );
}
