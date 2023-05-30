import { motion, useAnimation } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
import "../../styles/getStarted.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const GetStarted = () => {
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
    <div className="landing__getStarted">
      <div className="getStarted__container">
        <motion.div
          className="text__container"
          variants={textVariant(0)}
          ref={ref}
          initial="hidden"
          animate={control}
        >
          <h2>Get Started</h2>
          <p>
            Get started by creating an account and start playing with Framer
            Motion animations and transitions. You are just one click away.
          </p>
        </motion.div>
        <motion.button
          variants={slideIn("up", "tween", 0.1, 0.1)}
          whileHover="hover"
          className="cta-btn"
          ref={ref}
          initial="hidden"
          animate={control}
        >
          <Link to="/signup">Sign Up Free</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default GetStarted;
