import "../../styles/header.scss";
import { motion } from "framer-motion";
import { headerRoutes } from "../../constants";
import { Link } from "react-router-dom";
import { LoginRegisterButton } from "..";
import { fadeIn } from "../../utils/motion";

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
          MotionGround
        </motion.a>
        <ul>
          {headerRoutes.map((route, index) => (
            <Link to={route.path} key={index}>
              <motion.li
                variants={fadeIn("down", "tween", index * 0.05, 0.5)}
                initial="hidden"
                animate="show"
              >
                {route.name}
              </motion.li>
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
