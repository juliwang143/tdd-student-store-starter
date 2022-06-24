import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavbar from "../SubNavbar/SubNavbar";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  setProducts,
  searchContent,
  setSearchContent,
  handleSearchChange,
  category,
  setCategory,
  handleOnToggle,
}) {
  return (
    <div className="home">
      <Hero></Hero>
      <SubNavbar
        products={products}
        setProducts={setProducts}
        searchContent={searchContent}
        setSearchContent={setSearchContent}
        handleSearchChange={handleSearchChange}
        category={category}
        setCategory={setCategory}
        handleOnToggle={handleOnToggle}
      ></SubNavbar>

      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        searchContent={searchContent}
        category={category}
      ></ProductGrid>
    </div>
  );
}
