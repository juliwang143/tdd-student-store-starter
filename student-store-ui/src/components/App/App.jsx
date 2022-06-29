import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import Orders from "../Orders/Orders";
import OrderDetails from "../OrderDetails/OrderDetails";

import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({});
  const [category, setCategory] = React.useState("all");
  const [searchContent, setSearchContent] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [checkoutStatus, setCheckoutStatus] = React.useState("");

  const subtotal = React.useRef(0);
  const taxes = React.useRef(0);
  const total = React.useRef(0);

  const [orders, setOrders] = React.useState([]);
  const [receipt, setReceipt] = React.useState({});

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSearchChange(e) {
    setSearchContent(e.target.value);
  }

  function handleCheckoutStatusChange() {
    setCheckoutStatus("");
  }

  function handleSearch() {
    const tempProducts = products.filter((element) => {
      return element.name.toLowerCase().includes(searchContent.toLowerCase());
    });

    setProducts(tempProducts);
  }

  function getProduct(productId) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        let productPrice = products[i].price;

        return { price: productPrice };
      }
    }

    return undefined;
  }

  function handleOnToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleAddItemToCart(productId) {
    const product = getProduct(productId);
    subtotal.current += product.price;
    taxes.current += 0.0875 * product.price;
    total.current += 1.0875 * product.price;

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
        taxes.current -= 0.0875 * product.price;
        total.current -= 1.0875 * product.price;

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

  function handleOnCheckoutFormChange() {}

  function handleOnSubmitCheckoutForm() {
    let postRequest = {
      user: { name: name, email: email },
      shoppingCart: shoppingCart,
    };
    axios
      .post("http://localhost:3001/store", postRequest)
      .then((response) => {
        setCheckoutStatus("success");
        setReceipt(response.data.purchase);
      })
      .catch((error) => {
        setCheckoutStatus("error");
      });

    setShoppingCart([]);
    setCheckoutForm({});
    setName("");
    setEmail("");
  }

  React.useEffect(() => {
    setIsFetching(true);
    axios
      .get("http://localhost:3001/store")
      .then(function (response) {
        const responseProducts = response.data.products;
        setProducts(responseProducts);
        setIsFetching(false);
      })
      .catch(function (getError) {
        setError(getError);
      });

    // added for orders
    axios
      .get("http://localhost:3001/store/orders")
      .then(function (response) {
        setOrders(response.data.orders);
      })
      .catch(function (getError) {
        setError(true);
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
            name={name}
            email={email}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            setName={setName}
            setEmail={setEmail}
            checkoutStatus={checkoutStatus}
            setCheckoutStatus={setCheckoutStatus}
            handleCheckoutStatusChange={handleCheckoutStatusChange}
            receipt={receipt}
            setReceipt={receipt}
            error={error}
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
                  category={category}
                  setCategory={setCategory}
                  handleOnToggle={handleOnToggle}
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
                  category={category}
                  setCategory={setCategory}
                  handleOnToggle={handleOnToggle}
                />
              }
            />
            <Route exact path="/#about" element={<About />} />
            <Route exact path="/#contact" element={<Contact />} />
            <Route
              exact
              path="/Orders"
              element={<Orders orders={orders} setOrders={setOrders} />}
            />
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
            {/* TODO added */}
            <Route
              exact
              path="/orders/:orderId"
              element={
                <OrderDetails
                  setIsFetching={setIsFetching}
                  isFetching={isFetching}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <About></About>
          <Contact></Contact>
        </main>
      </BrowserRouter>
    </div>
  );
}
