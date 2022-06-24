import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({
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
  // added
  name,
  email,
  handleNameChange,
  handleEmailChange,
  setName,
  setEmail,
}) {
  return (
    <div>
      {isOpen ? (
        <OpenSidebar
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
      ) : (
        <ClosedSidebar
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
      )}
    </div>
  );
}

function ClosedSidebar({
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
  // added
  name,
  email,
  handleNameChange,
  handleEmailChange,
  setName,
  setEmail,
}) {
  return (
    <section className="sidebar closed">
      <div className="wrapper">
        <button className="toggle-button" onClick={handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
      </div>
    </section>
  );
}

function OpenSidebar({
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
  // added
  name,
  email,
  handleNameChange,
  handleEmailChange,
  setName,
  setEmail,
}) {
  return (
    <section className="sidebar open">
      <div className="wrapper">
        <button
          id="open-button"
          className="toggle-button button open"
          onClick={handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <ShoppingCart
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
        ></ShoppingCart>
      </div>
    </section>
  );
}
