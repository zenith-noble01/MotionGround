import { motion } from "framer-motion";
import { buttonVariant } from "../utils/motion";

const GetStarted = () => {
  return (
    <section id="get-started">
      <h2>Get Started</h2>
      <p>
        Get started by creating an account and start playing with Framer Motion
        animations and transitions. You are just one click away.
      </p>
      <motion.button
        variants={buttonVariant}
        whileHover="hover"
        className="cta-btn"
        href="#"
      >
        Sign Up
      </motion.button>
    </section>
  );
};

export default GetStarted;
