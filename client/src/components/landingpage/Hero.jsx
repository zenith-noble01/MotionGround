import { motion, useAnimation } from "framer-motion";
import "../../styles/hero.scss";
import { Link } from "react-router-dom";
import { fadeIn } from "../../utils/motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Hero = () => {
  const { ref, inView } = useInView();

  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [inView, control]);

  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 0.5)}
      initial="hidden"
      animate={control}
      className="landing__hero"
      id="home"
      ref={ref}
    >
      <h1>
        Create Stunning Animations <br /> with Framer Motion
      </h1>
      <p>
        MotionGround is an online playground for Framer Motion that lets you{" "}
        <br />
        visually create and customize animations and transitions with ease.
      </p>
      <motion.button whileHover="hover" className="cta-btn" href="a">
        <Link to="/signup">Get Started for Free</Link>
      </motion.button>
    </motion.div>
  );
};

export default Hero;
