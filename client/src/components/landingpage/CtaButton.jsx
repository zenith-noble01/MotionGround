import { useState } from "react";
import { Link } from "react-router-dom";

function LoginRegisterButton() {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  return (
    <>
      <Link
        to="/login"
        className={isLoginHovered ? "cta__btn active" : "cta__btn acti"}
        onMouseEnter={() => setIsLoginHovered(true)}
        onMouseLeave={() => setIsLoginHovered(false)}
      >
        Sign in
      </Link>
      <Link
        to="/register"
        className={!isLoginHovered ? "cta__btn active" : "cta__btn"}
      >
        Sign up
      </Link>
    </>
  );
}

export default LoginRegisterButton;
