import { useInView } from "react-intersection-observer";
import { features } from "../../constants";
import "../../styles/features.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { textVariant, fadeIn } from "../../utils/motion";
// import { Link } from "react-router-dom";

const Features = () => {
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
    <section id="features" className="landing__features">
      <motion.div
        variants={textVariant(0)}
        ref={ref}
        initial="hidden"
        animate={control}
        className="text__container"
      >
        <h2>Features.</h2>
        <p>
          Discover all the tools you need to create stunning animations with
          ease.
        </p>
      </motion.div>
      <ul>
        {features.map((feature, index) => (
          <motion.div
            ref={ref}
            variants={fadeIn("rigth", "tween", index * 0.1, 0.3)}
            className={`feature feature${index}`}
            initial="hidden"
            animate={control}
            key={index}
          >
            <div className="feature__icon">
              <feature.icon />
            </div>
            <p> {feature.text}</p>
          </motion.div>
        ))}
      </ul>
    </section>
  );
};

export default Features;
