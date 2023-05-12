import React from "react";
import "../styles/activation.scss";

const Activation = () => {
  return (
    <div className="app__activation">
      <h2>Verify Your Account</h2>
      <p>
        We send you the six digit code to example@gmail.com <br /> Enter the
        code below to confirm your email address.
      </p>
      <div className="activation__container">
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
      </div>
    </div>
  );
};

export default Activation;
