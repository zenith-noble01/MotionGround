import React, { useRef, useState } from "react";
import "../styles/activation.scss";

const Activation = () => {
  const inputs = useRef([]);
  const [activationCode, setActivationCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(activationCode);

    // Do something with activationCode
  };

  const handleChange = (index, event) => {
    let val = event.target.value;

    // if value has just been pasted
    if (val.length > 1) {
      // put each digit in a separate input field
      const digits = val.split("");
      for (
        let i = index;
        i < index + digits.length && i < inputs.current.length;
        i++
      ) {
        inputs.current[i].value = digits[i - index];
      }
      // move focus to the last input with new value
      inputs.current[Math.min(index + digits.length - 1, 5)].focus();
    }
    // check if input value has more than 1 digit
    if (val.length === 1) {
      // move to the next input if available
      if (inputs.current[index + 1]) {
        inputs.current[index + 1].focus();
      }
    } else if (val.length > 1) {
      // take the first digit and move to the next input
      let nextInput = inputs.current[index + 1];
      if (nextInput) {
        inputs.current[index].value = val[0];
        nextInput.focus();
      }
    }
    // update the activation code state with all values
    let updatedActivationCode = "";
    inputs.current.forEach((input) => {
      updatedActivationCode += input.value;
    });
    setActivationCode(updatedActivationCode);
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
            {[...new Array(6)].map((_, i) => (
              <input
                key={i}
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                ref={(el) => (inputs.current[i] = el)}
                onChange={(e) => handleChange(i, e)}
                required
              />
            ))}
          </div>

          <button>Verify Account</button>
        </form>
      </div>
    </div>
  );
};

export default Activation;
