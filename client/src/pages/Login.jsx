import React, { useState } from "react";
import "../styles/auth.scss";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  const { username, email, password } = data;

  const handleOnChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {};

  return (
    <div className="app__auth login">
      <div className="auth__container">
        <div className="form__header">
          <div className="logo">
            <p>MotionCanvas</p>
          </div>
          <h2>Create your MotionCanvas account</h2>
        </div>
        {isClicked ? (
          <div className="form__container">
            <button className="google__continue">
              <AiOutlineGoogle />
              Continue with Google
            </button>
            <form onSubmit={handleSubmit}>
              <div className="input__container">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input__container">
                <input type="password" placeholder="Password" />
              </div>
              <button className="email__continue">Sign in</button>
            </form>
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
              Sign in with email
            </button>
          </div>
        )}
        <p className="link__text">
          Don't have an account? <Link to="/register"> Sign up for free</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
