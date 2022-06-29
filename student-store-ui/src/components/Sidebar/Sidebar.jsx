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
  name,
  email,
  handleNameChange,
  handleEmailChange,
  setName,
  setEmail,
  checkoutStatus,
  setCheckoutStatus,
  handleCheckoutStatusChange,
  receipt,
  setReceipt,
  error,
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
          setReceipt={setReceipt}
          error={error}
        />
      ) : (
        <ClosedSidebar handleOnToggle={handleOnToggle} />
      )}
    </div>
  );
}

function ClosedSidebar({ handleOnToggle }) {
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
  name,
  email,
  handleNameChange,
  handleEmailChange,
  setName,
  setEmail,
  checkoutStatus,
  setCheckoutStatus,
  handleCheckoutStatusChange,
  receipt,
  setReceipt,
  error,
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
          setReceipt={setReceipt}
          error={error}
        ></ShoppingCart>
      </div>
    </section>
  );
}
