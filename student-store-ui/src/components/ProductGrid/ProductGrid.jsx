import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({ products, handleAddItemToCart, handleRemoveItemFromCart }) {
  return (
    <div className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
          {
            products.map((element) => {
              return <ProductCard product={element} key={element.id}
                productId={element.id} quantity={1} handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemFromCart={handleRemoveItemFromCart} showDescription={false} ></ProductCard>
            })
          }
        </div>
      </div>
    </div>
  )
}

