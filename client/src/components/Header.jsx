import "../styles/header.scss";
import { motion } from "framer-motion";
import { headerRoutes } from "../constants";
import { Link } from "react-router-dom";
import { LoginRegisterButton } from "./";

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
          {headerRoutes.map((route, index) => (
            <Link to={route.path} key={index}>
              <motion.li>{route.name}</motion.li>
            </Link>
          ))}
        </ul>

        <div className="cta__btns">
          <LoginRegisterButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
