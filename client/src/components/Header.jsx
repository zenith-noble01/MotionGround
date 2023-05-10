import "../styles/header.scss";
import { motion } from "framer-motion";
import { headerRoutes } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="landing__header">
      <nav>
        <motion.a
          href="#home"
          className="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          MotionCanvas
        </motion.a>
        <ul>
          {headerRoutes.map((route, index) => {
            <Link to={route.path} key={index}>
              <motion.a>{route.name}</motion.a>
            </Link>;
          })}
        </ul>

        <div className="cta__btns">
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
