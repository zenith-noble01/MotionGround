import "../styles/landingPage.scss";
import { Contact, Features, Header, Hero, GetStarted } from "../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { textVariant } from "../utils/motion";

function LandingPage() {
  let currentYear = new Date().getFullYear();

  const control = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="landing-page">
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
        <p>&copy; MotionCanvas {currentYear}. All rights reserved.</p>

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
    </div>
  );
}

export default LandingPage;
