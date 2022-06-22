import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavbar from "../SubNavbar/SubNavbar";

export default function Home({ products, handleAddItemToCart, handleRemoveItemFromCart }) {
  return (
    <div className="home">
      <Hero></Hero>
      <SubNavbar></SubNavbar>
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} ></ProductGrid>
    </div>
  )
}











