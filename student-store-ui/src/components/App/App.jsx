import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import ProductView from "../ProductView/ProductView";
import ProductDetail from "../ProductDetail/ProductDetail";

import axios from 'axios';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createRoot } from "react-dom/client";

// export default function App() {
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <main>
//           {/* YOUR CODE HERE! */}
//           <Navbar />
//           <Sidebar />
//           <Home />
//         </main>
//       </BrowserRouter>
//     </div>
//   )
// }


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
        <main>
          <Navbar  />
          <Sidebar />
          <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
          <ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} ></ProductDetail>
        </main>
    </div>
  )
}
