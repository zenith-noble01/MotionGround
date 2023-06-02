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
  const { hex } = useSelector((state) => state.bgColor);

  console.log(padding);

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
              paddingTop: padding.top === "" ? 0 : padding.top,
              paddingRight: padding.right === "" ? 0 : padding.right,
              paddingBottom: padding.bottom === "" ? 0 : padding.bottom,
              paddingLeft: padding.left === "" ? 0 : padding.left,
              marginTop: margin.top === "" ? 0 : margin.top,
              marginRight: margin.right === "" ? 0 : margin.right,
              marginBottom: margin.bottom === "" ? 0 : margin.bottom,
              marginLeft: margin.left === "" ? 0 : margin.left,
              background: `#${hex}`,
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
