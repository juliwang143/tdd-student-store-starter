import * as React from "react"
import "./Navbar.css"
import "../Sidebar/Sidebar"

export default function Navbar() {
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



  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo"></div>
        <div className="socials"></div>
        <ul className="links">
          {/* TODO */}
        </ul>
      </div>
    </nav>
  )
}
