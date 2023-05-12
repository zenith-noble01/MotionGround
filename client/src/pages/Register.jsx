import React, { useState } from "react";
import "../styles/auth.scss";

const Register = () => {
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
        <form onSubmit={handleSubmit}></form>
      </div>
    </div>
  );
};

export default Register;
