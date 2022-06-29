import * as React from "react";
import "./ProductCard.css";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img src={product.image} alt="product.name" loading="lazy" />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price?.toFixed(2)}</p>
        </div>
        {showDescription && (
          <div className="desc">
            <p className="product-description">{product.description}</p>
          </div>
        )}
        <div className="actions">
          <div className="buttons">
            <button
              className="add"
              onClick={() => handleAddItemToCart(productId)}
            >
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => handleRemoveItemFromCart(productId)}
            >
              <i className="material-icons">remove</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
