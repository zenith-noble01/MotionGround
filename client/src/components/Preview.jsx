import React, { useEffect, useState } from "react";
import "../styles/preview.scss";
import { CodePreview, PreviewHeader } from "./";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAnimateContainer } from "../redux/slice/annimations";
import { fadeIn, slideIn, textVariant, zoomIn } from "../utils/motion";
import {
  AiFillPauseCircle,
  AiOutlineReload,
  AiFillPlayCircle,
} from "react-icons/ai";

const Preview = () => {
  const [mode, setMode] = useState("editor");
  const [motionVariant, setMotionVariant] = useState({});
  const [animationKey, setAnimationKey] = useState(Math.random());

  const animateContainer = useSelector(selectAnimateContainer);
  const { annimType, delay, duration, direction, type } = animateContainer;

  const [useNewAnimation, setUseNewAnimation] = useState(false);

  useEffect(() => {
    const motionVariants = () => {
      if (useNewAnimation) {
        return {
          hidden: {
            x: -50,
            opacity: 0,
          },
          show: {
            x: 0,
            opacity: 1,
            transition: {
              type: "tween",
              delay: parseInt(delay),
              duration: parseInt(duration),
              ease: "easeOut",
            },
          },
        };
      } else {
        switch (annimType) {
          case "text":
            return textVariant(parseInt(delay));
          case "zoom":
            return zoomIn(parseInt(delay), parseInt(duration));
          case "fade":
            return fadeIn(direction, type, parseInt(delay), parseInt(duration));
          case "slide":
            return slideIn(
              direction,
              type,
              parseInt(delay),
              parseInt(duration)
            );
          default:
            return textVariant(parseInt(delay));
        }
      }
    };

    const newMotionVariant = motionVariants();
    setMotionVariant(newMotionVariant);

    // Reload the animation if motionVariant has changed
    if (JSON.stringify(newMotionVariant) !== JSON.stringify(motionVariant)) {
      setAnimationKey(Math.random());
    }
  }, [
    animateContainer,
    delay,
    duration,
    direction,
    type,
    annimType,
    useNewAnimation,
    motionVariant,
  ]);

  return (
    <div className="playground__preview">
      <div className="preview__container">
        <PreviewHeader mode={mode} setMode={setMode} />

        <div className="container">
          <button
            onClick={() => setUseNewAnimation((currentValue) => !currentValue)}
          >
            {useNewAnimation ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </button>
          <button onClick={() => setAnimationKey(Math.random())}>
            <AiOutlineReload />
          </button>
          <motion.div
            key={animationKey}
            initial="hidden"
            animate="show"
            variants={motionVariant}
          >
            This is a text
          </motion.div>
        </div>
      </div>
      <CodePreview mode={mode} setMode={setMode} />
    </div>
  );
};

export default Preview;
