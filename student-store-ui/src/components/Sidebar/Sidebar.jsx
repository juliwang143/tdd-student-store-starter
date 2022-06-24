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
  // setSubtotal,
  // setTaxes,
  // setTotal,
  //
  subtotal,
  taxes,
  total,
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
          // setSubtotal={setSubtotal}
          // setTaxes={setTaxes}
          // setTotal={setTotal}
          //
          subtotal={subtotal}
          taxes={taxes}
          total={total}
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
          // setSubtotal={setSubtotal}
          // setTaxes={setTaxes}
          // setTotal={setTotal}
          //
          subtotal={subtotal}
          taxes={taxes}
          total={total}
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
  // setSubtotal,
  // setTaxes,
  // setTotal,
  //
  subtotal,
  taxes,
  total,
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
  // setSubtotal,
  // setTaxes,
  // setTotal,
  //
  subtotal,
  taxes,
  total,
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
          // setSubtotal={setSubtotal}
          // setTaxes={setTaxes}
          // setTotal={setTotal}
          //
          subtotal={subtotal}
          taxes={taxes}
          total={total}
        ></ShoppingCart>
      </div>
    </section>
  );
}
