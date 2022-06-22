import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import ProductView from "../ProductView/ProductView";
import ProductDetail from "../ProductDetail/ProductDetail";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { HashLink } from 'react-router-hash-link';

import axios from 'axios';
import { Routes, Route, Link, useParams, BrowserRouter } from 'react-router-dom'

export default function App() {
  // state variables
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState('');

  // handler functions
  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(productId) {
    if (!shoppingCart.includes(productId)) { 
      let newItem = {itemId: productId, quantity: 1};
      setShoppingCart(shoppingCart => [...shoppingCart, newItem]);
    } else {
      let tempShoppingCart = shoppingCart.spplice();
      let index = tempshoppingCart.findIndex(element => element.itemId == productId);
      tempShoppingCart[index] = {itemId: productId, quantity: tempShoppingCart[index].quantity + 1};
      setShoppingCart(tempShoppingCart);
    }
  }
 
  function handleRemoveItemFromCart(productId) {
    if (shoppingCart.includes(productId)) {
      let tempShoppingCart = shoppingCart.splice();
      tempShoppingCart.filter(element => element.itemId !== productId);
      tempShoppingCart.filter(element => element.quantity > 0);
      setShoppingCart(tempShoppingCart);
    }
  }

  React.useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store").then(
      function (response) {
        setProducts(response.data.products);
      }
    )
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
      <main>
        <Navbar  />
        <Sidebar />
        {/* <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />           */}

        <ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} ></ProductDetail>

        <Routes>
              <Route exact path='/' element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />} />
              <Route exact path='/#about' element={<About />} />
              <Route exact path='/#contact' element={<Contact />} />
              {/* <Route exact path='/store/:name' element={<ProductDetail/>}/> */}

              {/* <Route path='/contact' component={ProductDetail } />
              <Route path='/about' component={Sidebar} /> */}
        </Routes>

        <About></About>
        <Contact></Contact>

      </main>
      </BrowserRouter>
    </div>
  )
}
