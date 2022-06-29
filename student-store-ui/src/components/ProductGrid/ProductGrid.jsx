import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  searchContent,
  category,
}) {
  let categoryProducts;
  if (category === "all") {
    categoryProducts = products;
  } else {
    categoryProducts = products.filter((element) => {
      return element.category === category;
    });
  }

  const searchProducts = categoryProducts.filter((element) => {
    return element.name.toLowerCase().includes(searchContent.toLowerCase());
  });

  return (
    <div className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid" id="row">
          {searchProducts.map((element) => {
            return (
              <ProductCard
                product={element}
                key={element.id}
                productId={element.id}
                quantity={1}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
              ></ProductCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
