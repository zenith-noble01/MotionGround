import { motion } from "framer-motion";
import "../styles/landingPage.scss";

function LandingPage() {
  const heroVariant = {
    hidden: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: "0%" },
  };
  const buttonVariant = { hover: { scale: 1.1 } };

  return (
    <div className="landing-page">
      <header>
        <nav>
          <motion.a
            href="#home"
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            MotionCanvas
          </motion.a>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#templates">Templates</a>
            </li>
            <li>
              <a href="#get-started">Get Started</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
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

        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>Create and edit animations visually with just a few clicks</li>
            <li>
              Experiment with Framer Motion animations and transitions in an
              easy-to-use interface
            </li>
            <li>
              A wide variety of pre-built templates and animations to help you
              get started quickly
            </li>
            <li>
              Collaborate with other developers to combine and refine ideas
            </li>
            <li>
              Export your creations in one click and use them in your Framer
              Motion or React projects
            </li>
          </ul>
        </section>

        <section id="templates">
          <h2>Templates</h2>
          <p>
            Choose from a variety of pre-built templates and animations to help
            you get started quickly in creating your custom animations and
            transitions.
          </p>
          <div className="template-gallery">
            <img src="template-1.jpg" alt="Template 1" />
            <img src="template-2.jpg" alt="Template 2" />
            <img src="template-3.jpg" alt="Template 3" />
          </div>
        </section>

        <section id="get-started">
          <h2>Get Started</h2>
          <p>
            Get started by creating an account and start playing with Framer
            Motion animations and transitions. You are just one click away.
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

        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            Get in touch with our team and let us know what features you would
            like to see or what problems you&apos;re running into.
          </p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <motion.button
              variants={buttonVariant}
              whileHover="hover"
              type="submit"
            >
              Send
            </motion.button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; MotionCanvas 2022. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
