import { useEffect, useState } from "react";
import "../../styles/preview.scss";
import { CodePreview, PreviewHeader } from "../";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAnimateContainer } from "../../redux/slice/annimations";
import { fadeIn, slideIn, textVariant, zoomIn } from "../../utils/motion";
import { useDispatch } from "react-redux";
import { startDrag, endDrag } from "../../redux/slice/baseSlice";

const Preview = () => {
  const [mode, setMode] = useState(() => "editor");
  const [motionVariant, setMotionVariant] = useState({});
  const [animationKey, setAnimationKey] = useState(() => Math.random());
  const [buttonActive, setButtonActive] = useState(() => false);

  const animateContainer = useSelector(selectAnimateContainer);
  const { annimType, delay, duration, direction, type } = animateContainer;

  const [useNewAnimation, setUseNewAnimation] = useState(() => false);

  const dispatch = useDispatch();

  const { margin, padding } = useSelector((state) => state.customize);
  const { color } = useSelector((state) => state.bgColor);
  const { textHex } = useSelector((state) => state.textColor);

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
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  }, [
    animateContainer,
    delay,
    duration,
    direction,
    type,
    annimType,
    useNewAnimation,
    // motionVariant,
  ]);

  const handleDragStart = (event, name) => {
    event.dataTransfer.setData("text/plain", name);
    dispatch(startDrag(name));
  };

  const handleDragEnd = () => {
    dispatch(endDrag());
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const name = event.dataTransfer.getData("text/plain");
    dispatch(startDrag(name));
  };

  return (
    <div className="playground__preview">
      <div className="preview__container">
        <PreviewHeader
          mode={mode}
          setUseNewAnimation={setUseNewAnimation}
          setMode={setMode}
          setAnimationKey={setAnimationKey}
          useNewAnimation={useNewAnimation}
          buttonActive={buttonActive}
        />

        <div className="container">
          <motion.div
            key={animationKey}
            initial="hidden"
            animate="show"
            variants={motionVariant}
            onDragStart={(event) => handleDragStart(event, "text")}
            onDragEnd={handleDragEnd}
            style={{
              padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
              margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
              background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
              color: `#${textHex}`,
            }}
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
