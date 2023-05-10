import { motion } from "framer-motion";
import { buttonVariant } from "../utils/motion";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>
        Get in touch with our team and let us know what features you would like
        to see or what problems you&apos;re running into.
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
  );
};

export default Contact;
