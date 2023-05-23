import { motion } from "framer-motion";
import "../styles/loadingannimation.scss";

const LoadingAnimation = () => {
  const animationVariants = {
    start: {
      translateX: [0, "70%", "70%", "0%", "0%"],
      width: ["70%", "60%", "30%", "60%", "70%"],
    },
  };

  const animationTransition = {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.05, 0.5, 0.95, 1],
    loop: Infinity,
    repeatDelay: 0.5,
  };
  return (
    // <div className="app__loadingannimation">
    <motion.div
      className="logo"
      variants={animationVariants}
      animate="start"
      transition={animationTransition}
    >
      <motion.div className="shape shape1" />
      <motion.div className="shape shape2" />
      <motion.div className="shape shape3" />
      <motion.div className="shape shape4" />
    </motion.div>
    // </div>
  );
};

export default LoadingAnimation;
