import "../styles/header.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
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
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#templates">Templates</a>
          </li>
          <li>
            <a href="#get-started">Get Started</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
