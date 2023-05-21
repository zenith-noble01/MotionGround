import React, { useState } from "react";
import "../styles/baseelements.scss";
import { baseElements } from "../constants";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const BaseElements = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="base__elements">
      <div className={isOpen ? "base__container gap" : "base__container"}>
        <motion.div className="base__header">
          <button
            className={isOpen ? "op" : ""}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Base Elements
            <BsChevronRight className={`rotate-icon ${isOpen ? "open" : ""}`} />
          </button>
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
                closed: { opacity: 0, y: "-10%" },
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
