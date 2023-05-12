import React from "react";
import "../styles/activation.scss";

const Activation = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="app__activation">
      <div className="activation__container">
        <div className="text__container">
          <h2>Verify Your Account</h2>
          <p>
            We send you the six digit code to example@gmail.com <br /> Enter the
            code below to confirm your email address.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="activation__wrapper">
          <div className="inputs">
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

          <button>Verify Account</button>
        </form>
      </div>
    </div>
  );
};

export default Activation;
