import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  name,
  email,
  handleNameChange,
  handleEmailChange,
}) {
  return (
    <div className="checkout-form">
      <h3 className="">
        Payment Info
        <span className="button">
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="checkout-form-input">
        <label className="label">Name</label>
        <div className="control ">
          <input
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
      </div>
      <div className="checkout-form-input">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button
            className="button checkout-button"
            onClick={handleOnSubmitCheckoutForm}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
