import { motion } from "framer-motion";

const LoadingAnimation = () => {
  const container = {
    height: "35px",
    width: "35px",
    // background: "black",
    borderRadius: 10,
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  };

  const shape = {
    height: 10,
    width: "70%",
    background: "blue",
    borderRadius: "0px",
    position: "absolute",
    top: 0,
    left: "-100%",
    marginRight: "-10%",
  };

  const shape1 = {
    ...shape,
    borderRightRadius: "5px",
  };

  const shape2 = {
    ...shape,
    left: "auto",
    right: "-100%",
    borderLeftRadius: "5px",
  };

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
    <motion.div
      className="logo"
      style={container}
      variants={animationVariants}
      animate="start"
      transition={animationTransition}
    >
      <motion.div className="abstrac1" style={shape1} />
      <motion.div className="abstrac2" style={shape2} />
    </motion.div>
  );
};

export default LoadingAnimation;
