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

  for (const item in shoppingCart) {
    console.log("heeelloo " + JSON.stringify(item));
  }

  // handler functions
  function handleOnToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleAddItemToCart(productId) {
    let isInShoppingCart = false;

    // Finding clicked product
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        isInShoppingCart = true;

        const newShoppingCart = shoppingCart.map((item) => {
          if (item.productId === productId) {
            let oldQuantity = item.quantity;
            return { itemId: productId, quantity: oldQuantity + 1 };
          } else {
            return item;
          }
        });

        setShoppingCart(newShoppingCart);
        return;
      }
    }

    let newItem = { itemId: productId, quantity: 1 };
    const newShoppingCart = [...shoppingCart, newItem];
    console.log("hi");
    setShoppingCart(newShoppingCart);
  }

  function handleRemoveItemFromCart(productId) {
    let isInShoppingCart = false;
    for (const item of shoppingCart) {
      if (item.itemId === productId) {
        isInShoppingCart = true;
        break;
      }
    }

    if (isInShoppingCart) {
      let tempShoppingCart = shoppingCart.slice();
      tempShoppingCart.filter((element) => element.itemId !== productId);
      tempShoppingCart.filter((element) => element.quantity > 0);
      setShoppingCart(tempShoppingCart);
    }

    // if (shoppingCart.includes(productId)) {
    //   // let tempShoppingCart = shoppingCart.splice();
    //   // tempShoppingCart.filter(element => element.itemId !== productId);
    //   // tempShoppingCart.filter(element => element.quantity > 0);
    //   // setShoppingCart(tempShoppingCart);
    //
    //   let filteredArray = this.state.shoppingCart.filter(item => item !== productId)
    //   this.setState({shoppingCart: filteredArray});
    // }
  }

  // TODO
  function handleOnCheckoutFormChange() {}

  // TODO
  function handleOnSubmitCheckoutForm() {}

  React.useEffect(() => {
    // Fetching true
    setIsFetching(true);

    axios.get("https://codepath-store-api.herokuapp.com/store").then(
      // Fetching false
      function (response) {
        setProducts(response.data.products);

        setIsFetching(false);
      }
    );
  });

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
