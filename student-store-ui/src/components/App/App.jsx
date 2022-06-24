import * as React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import ProductView from "../ProductView/ProductView";
import ProductDetail from "../ProductDetail/ProductDetail";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { HashLink } from "react-router-hash-link";
import SubNavbar from "../SubNavbar/SubNavbar";

import axios from "axios";
import {
  Routes,
  Route,
  Link,
  useParams,
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  // state variables
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState("");
  const [category, setCategory] = React.useState("");

  // added
  const [searchContent, setSearchContent] = React.useState("");

  console.log("aewfwefawefawf");
  console.log(shoppingCart);

  function handleSearchChange(e) {
    // console.log("event:: " + JSON.stringify(e.target.value));
    setSearchContent(e.target.value);
  }

  function handleSearch() {
    console.log("products: " + products.length);
    const tempProducts = products.filter((element) => {
      return element.name.toLowerCase().includes(searchContent.toLowerCase());
    });

    console.log("after filtering: " + tempProducts);
    setProducts(tempProducts);
  }

  // handler functions
  function handleOnToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleAddItemToCart(productId) {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        let tempShoppingCart = [...shoppingCart];
        let index = tempShoppingCart.findIndex(
          (element) => element.itemId == productId
        );
        tempShoppingCart[index] = {
          itemId: productId,
          quantity: tempShoppingCart[index].quantity + 1,
        };

        setShoppingCart(tempShoppingCart);
        return;
      }
    }

    let newItem = { itemId: productId, quantity: 1 };
    const newShoppingCart = [...shoppingCart, newItem];
    setShoppingCart(newShoppingCart);
  }

  function handleRemoveItemFromCart(productId) {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        let tempShoppingCart = [...shoppingCart];
        let tempShoppingCart2 = tempShoppingCart.map(function (element) {
          if (element.itemId === productId) {
            return { itemId: productId, quantity: element.quantity - 1 };
          } else {
            return element;
          }
        });
        let tempShoppingCart3 = tempShoppingCart2.filter(
          (element) => element.quantity > 0
        );

        setShoppingCart(tempShoppingCart3);
        return;
      }
    }
  }

  // TODO
  function handleOnCheckoutFormChange() {}

  // TODO
  function handleOnSubmitCheckoutForm() {}

  React.useEffect(() => {
    // added and the search content in dependencies
    console.log("in use effect");

    // Fetching true
    setIsFetching(true);

    axios.get("https://codepath-store-api.herokuapp.com/store").then(
      // Fetching false
      function (response) {
        setProducts(response.data.products);
        setIsFetching(false);

        // added this
        // handleSearch();
      }
    );
  }, [searchContent]);

  return (
    <div className="app">
      <BrowserRouter>
        <main id="home">
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
          />
          {/* <SubNavbar></SubNavbar> */}

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  setProducts={setProducts}
                  searchContent={searchContent}
                  setSearchContent={setSearchContent}
                  handleSearchChange={handleSearchChange}
                  // added
                  category={category}
                  setCategory={setCategory}
                />
              }
            />
            <Route
              exact
              path="/#buy"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  setProducts={setProducts}
                  searchContent={searchContent}
                  setSearchContent={setSearchContent}
                  handleSearchChange={handleSearchChange}
                  // added
                  category={category}
                  setCategory={setCategory}
                />
              }
            />
            <Route exact path="/#about" element={<About />} />
            <Route exact path="/#contact" element={<Contact />} />
            <Route
              exact
              path="/products/:productId"
              element={
                <ProductDetail
                  setIsFetching={setIsFetching}
                  isFetching={isFetching}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
          </Routes>

          <About></About>
          <Contact></Contact>
        </main>
      </BrowserRouter>
    </div>
  );
}
