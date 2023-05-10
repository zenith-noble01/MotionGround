import { motion } from "framer-motion";

const Hero = ({ heroVariant, buttonVariant }) => {
  return (
    <motion.section
      className="hero"
      id="home"
      variants={heroVariant}
      initial="hidden"
      animate="show"
    >
      <h1>Create Stunning Animations with Framer Motion</h1>
      <p>
        MotionCanvas is an online playground for Framer Motion that lets you
        visually create and customize animations and transitions with ease.
      </p>
      <motion.button
        variants={buttonVariant}
        whileHover="hover"
        className="cta-btn"
        href="#"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
};

export default Hero;
