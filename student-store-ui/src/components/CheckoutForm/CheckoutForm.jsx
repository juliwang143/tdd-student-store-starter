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
  checkoutStatus,
  setCheckoutStatus,
  handleCheckoutStatusChange,
}) {
  // let tempCheckoutStatus = checkoutStatus.current;
  // // checkoutStatus.current = "";
  // console.log("temp check out status: " + tempCheckoutStatus);

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
      {/* <div className="success">
        <h3>
          Checkout Info
          <span className="icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="content">
          <p>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        </div>
      </div> */}

      {checkoutStatus === "success" && (
        <div className="success">
          <h3>Success! </h3>
        </div>
      )}

      {checkoutStatus === "error" && (
        <div className="error">
          <h3>{checkoutStatus}</h3>
        </div>
      )}
    </div>
  );
}
