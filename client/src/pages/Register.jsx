import React, { useState } from "react";
import "../styles/auth.scss";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    firtName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  const { firtName, lastName, email, password } = data;

  const handleOnChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="app__auth login">
      <div className="auth__container">
        <div className="form__header">
          <div className="logo">
            <p>MotionGround</p>
          </div>
          <h2>Create your MotionGround account</h2>
        </div>
        {isClicked ? (
          <div className="form__container">
            <button className="google__continue">
              <AiOutlineGoogle />
              Continue with Google
            </button>
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <div className="input__container">
                  <input
                    name="firtName"
                    value={firtName}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="input__container">
                  <input
                    name="lastName"
                    value={lastName}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="input__container">
                <input
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input__container">
                <input
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  type="password"
                  placeholder="Password"
                />
              </div>

              <button className="email__continue">Continue with email</button>
            </form>
            <div className="verify__container">
              <label htmlFor="terms">
                <input type="checkbox" id="terms" /> I agree to{" "}
                <Link to="/terms">Terms of Sevice</Link> and{" "}
                <Link to="/privacy">Privacy Stament</Link>
              </label>
              <label htmlFor="mails">
                <input type="checkbox" id="mails" /> Send software updates via
                email.
              </label>
            </div>
          </div>
        ) : (
          <div className="auth">
            <button className="google__continue">
              <AiOutlineGoogle />
              Continue with Google
            </button>
            <button
              className="email__continue"
              onClick={() => setIsClicked(true)}
            >
              Continue with email
            </button>
          </div>
        )}
        <p className="link__text">
          Already have an account? <Link to="/login"> Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
