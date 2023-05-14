import "../styles/landingPage.scss";
import { Contact, Features, Header, Hero, GetStarted } from "../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { textVariant } from "../utils/motion";

function LandingPage() {
  let currentYear = new Date().getFullYear();

  const control = useAnimation();

  const { ref, inView } = useInView();

  const [changeColor, setChangeColor] = useState(false);

  function changeNavBgColor() {
    if (window.scrollY >= 70) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }
  window.addEventListener("scroll", changeNavBgColor);

  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="app__landing">
      <Header />
      <main>
        <Hero />
        <Features />
        <GetStarted />
        <Contact />
      </main>

      <motion.footer
        ref={ref}
        initial="hidden"
        animate={control}
        variants={textVariant()}
      >
        <p>&copy; MotionGround {currentYear}. All rights reserved.</p>

        <span>
          Made with 🫀 By{" "}
          <a
            href="https://github.com/zenith-noble01/"
            rel="norefere"
            target="_black"
          >
            zenith-noble01
          </a>
        </span>
      </motion.footer>

      <a href="#home">
        <div
          className={`${
            changeColor ? "wheel__container active" : "wheel__container"
          }`}
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="wheel"
          />
        </div>
      </a>
    </div>
  );
}

export default LandingPage;
