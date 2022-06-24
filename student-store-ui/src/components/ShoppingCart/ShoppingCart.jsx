import * as React from "react";
import "./ShoppingCart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

// old props
// isOpen,
// product,
// productId,
// quantity,
// handleAddItemToCart,
// handleRemoveItemFromCart,

export default function ShoppingCart({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  subtotal,
  taxes,
  total,
  name,
  email,
  handleNameChange,
  handleEmailChange,
  setName,
  setEmail,
}) {
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div className="shopping-cart">
      <div className="open">
        <h3 className="">
          Shopping Cart
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
        <CartTable
          shoppingCart={shoppingCart}
          products={products}
          subtotal={subtotal}
          taxes={taxes}
          total={total}
        ></CartTable>

        <CheckoutForm
          name={name}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        ></CheckoutForm>
        <div className="checkout-success">
          <h3>
            Checkout Info
            <span className="icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </h3>
          <div className="content">
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartTable({ shoppingCart, products, subtotal, taxes, total }) {
  return (
    <div className="CartTable">
      <div className="header">
        <div className="header-row">
          <span className="flex-2">Name</span>
          <span className="center">Quantity</span>
          <span className="center">Unit Price</span>
          <span className="center">Cost</span>
        </div>
        <ul>
          {shoppingCart.map((element) => {
            console.log("awefawefawefawefawef");
            console.log(shoppingCart);
            return (
              <li key={element.itemId}>
                <ProductRow
                  productId={element.itemId}
                  quantity={element.quantity}
                  products={products}
                  subtotal={subtotal}
                  taxes={taxes}
                  total={total}
                ></ProductRow>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="receipt">
        <div className="receipt-subtotal">
          <span className="label">Subtotal</span>
          <span></span>
          <span></span>
          <span className="center subtotal">
            ${subtotal.current?.toFixed(2)}
          </span>
        </div>
        <div className="receipt-taxes">
          <span className="label">Taxes and Fees</span>
          <span></span>
          <span></span>
          <span className="center">${taxes.current?.toFixed(2)}</span>
        </div>
        <div className="receipt-total">
          <span className="label">Total</span>
          <span></span>
          <span></span>
          <span className="center total-price">
            ${total.current?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProductRow({ productId, quantity, products, subtotal, taxes, total }) {
  let productName;
  let productPrice;
  let productSubtotal;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      productName = products[i].name;
      productPrice = products[i].price;
      productSubtotal = quantity * productPrice;
      break;
    }
  }

  return (
    <div className="product-row">
      <span className="flex-2 cart-product-name">{productName}</span>
      <span className="center cart-product-quantity">{quantity}</span>
      <span className="center cart-product-price">
        ${productPrice?.toFixed(2)}
      </span>
      <span className="center cart-product-subtotal">
        ${productSubtotal?.toFixed(2)}
      </span>
    </div>
  );
}
