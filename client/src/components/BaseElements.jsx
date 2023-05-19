import React, { useState } from "react";
import "../styles/baseelements.scss";
import { baseElements } from "../constants";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const BaseElements = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div className="base__elements">
      <div className="base__container">
        <motion.div
          className="base__header"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p>
            Base Elements <BsChevronRight />
          </p>
        </motion.div>
        <motion.nav
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto" },
            closed: { height: 0 },
          }}
          className="base__content"
        >
          {baseElements.map((el, index) => (
            <motion.div
              key={index}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: "-100%" },
              }}
              className="base"
            >
              <el.icon />
              {el.name}
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </div>
  );
};

export default BaseElements;
