import React, { useEffect, useState } from "react";
import "../styles/preview.scss";
import { CodePreview, PreviewHeader } from "./";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAnimateContainer } from "../redux/slice/annimations";
import { fadeIn, slideIn, textVariant, zoomIn } from "../utils/motion";

const Preview = () => {
  const [mode, setMode] = useState("editor");
  const [motionVariant, setMotionVariant] = useState({});

  const animateContainer = useSelector(selectAnimateContainer);
  const { annimType, delay, duration, direction, type } = animateContainer;

  useEffect(() => {
    const getMotionVariant = () => {
      switch (annimType) {
        case "text":
          return textVariant(parseInt(delay));
        case "zoom":
          return zoomIn(parseInt(delay), parseInt(duration));
        case "fade":
          return fadeIn(direction, type, parseInt(delay), parseInt(duration));
        case "slide":
          return slideIn(direction, type, parseInt(delay), parseInt(duration));

        default:
          return textVariant(parseInt(delay));
      }
    };

    setMotionVariant(getMotionVariant());
  }, [animateContainer]);

  return (
    <div className="playground__preview">
      <div className="preview__container">
        <PreviewHeader mode={mode} setMode={setMode} />

        <div className="container">
          <motion.div initial="hidden" animate="show" variants={motionVariant}>
            This is a text
          </motion.div>
        </div>
      </div>
      <CodePreview mode={mode} setMode={setMode} />
    </div>
  );
};

export default Preview;
