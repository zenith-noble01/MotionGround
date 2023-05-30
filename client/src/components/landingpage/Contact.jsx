import { motion, useAnimation } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "../../styles/contact.scss";

const Contact = () => {
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
    <motion.div id="contact" className="landing__contact">
      <div className="contact__container">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 0.5)}
          ref={ref}
          initial="hidden"
          animate={control}
          className="text__container"
        >
          <h2>Contribute Today</h2>
          <p>
            Are you a developer wanting to take this project to next level?
            Contribute on the <br />
            <a
              href="https://github.com/zenith-noble01/MotionGround"
              rel="norefere"
              target="_black"
            >
              Github repo Here.
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
