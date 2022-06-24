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
  // const [checkoutForm, setCheckoutForm] = React.useState({
  //   user: { name: "", email: "" },
  //   shoppingCart: [],
  // });
  const [checkoutForm, setCheckoutForm] = React.useState({});
  const [category, setCategory] = React.useState("all");
  const [searchContent, setSearchContent] = React.useState("");

  // added
  // const name = React.useRef("");
  // const email = React.useRef("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleNameChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const subtotal = React.useRef(0);
  const taxes = React.useRef(0);
  const total = React.useRef(0);

  function handleSearchChange(e) {
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

  // added for subtotal
  function getProduct(productId) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        let productPrice = products[i].price;

        return { price: productPrice };
      }
    }

    return undefined;
  }

  // handler functions
  function handleOnToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleAddItemToCart(productId) {
    const product = getProduct(productId);
    subtotal.current += product.price;
    taxes.current += 0.1 * product.price;
    total.current += 1.1 * product.price;

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
        const product = getProduct(productId);
        subtotal.current -= product.price;
        taxes.current -= 0.1 * product.price;
        total.current -= 1.1 * product.price;

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
  // async function handleOnSubmitCheckoutForm() {
  //   console.log("!!!");
  //   let postRequest = {
  //     user: { name: name, email: email },
  //     shoppingCart: shoppingCart,
  //   };

  //   let post = await axios.post(
  //     "https://codepath-store-api.herokuapp.com/store",
  //     postRequest
  //   );
  //   console.log("posting! " + post.response);
  // }

  function handleOnSubmitCheckoutForm() {
    console.log("!!!");
    let postRequest = {
      user: { name: name, email: email },
      shoppingCart: shoppingCart,
    };

    axios
      .post("https://codepath-store-api.herokuapp.com/store", postRequest)
      .then((response) => {
        console.log(response);
      });
  }

  React.useEffect(() => {
    // added and the search content in dependencies
    console.log("in use effect");

    setIsFetching(true);

    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then(function (response) {
        const responseProducts = response.data.products;
        setProducts(responseProducts);
        setIsFetching(false);
        // added this
        // handleSearch();
      });
  }, [subtotal]);

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
            subtotal={subtotal}
            taxes={taxes}
            total={total}
            // added
            name={name}
            email={email}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            setName={setName}
            setEmail={setEmail}
          />
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
