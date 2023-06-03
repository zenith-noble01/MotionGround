import { RxMargin } from "react-icons/rx";
import "../../../styles/custimize.scss";
import { useState } from "react";
import reactCSS from "reactcss";
import { useSelector, useDispatch } from "react-redux";
import {
  ColorContainer,
  ColorPiker,
  ImageContainer,
  Margin,
  Padding,
  VideoContainer,
} from "../..";
import { setColor } from "../../../redux/slice/ColorSlice";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const CustomizeContainer = () => {
  const [activeSelector, setActiveSelector] = useState("color");
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const { color } = useSelector((state) => state.bgColor);

  const dispatch = useDispatch();

  const styles = reactCSS({
    default: {
      color: {
        width: "20px",
        height: "20px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        borderRadius: "5px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
        bottom: "150px",
        left: "60%",
      },
    },
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = ({ r, g, b, a }) => {
    dispatch(setColor({ r, g, b, a }));
  };

  const handleSelectorClick = (selector) => {
    setActiveSelector(selector);
  };

  return (
    <div className="customize__container">
      <div className="customize__content">
        <div className={isOpen ? "customize" : "customize open"}>
          <div className="header" onClick={() => setIsOpen((prev) => !prev)}>
            Spacing
            <BsChevronRight className={`rotate-icon ${isOpen ? "open" : ""}`} />
          </div>
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { height: "auto" },
              closed: { height: 0 },
            }}
          >
            <Padding />
            <div className="line" />
            <Margin />
          </motion.div>
        </div>
        <div className="customize">
          <div className="header">Color</div>
          <ColorPiker />
        </div>
        <div className="customize">
          <div className="header">Background</div>
          <div className="bg__container">
            <div className="selectors">
              <div
                className={`selector ${
                  activeSelector === "color" ? "active" : ""
                }`}
                onClick={() => handleSelectorClick("color")}
              >
                Color
              </div>
              <div
                className={`selector ${
                  activeSelector === "image" ? "active" : ""
                }`}
                onClick={() => handleSelectorClick("image")}
              >
                Image
              </div>
              <div
                className={`selector ${
                  activeSelector === "video" ? "active" : ""
                }`}
                onClick={() => handleSelectorClick("video")}
              >
                Video
              </div>
            </div>
            {/* showing elements based on the one they choised */}
            {activeSelector === "color" && (
              <ColorContainer
                styles={styles}
                handleClick={handleClick}
                displayColorPicker={displayColorPicker}
                alpha={color.a}
                handleClose={handleClose}
                handleChange={handleChange}
              />
            )}
            {activeSelector === "image" && (
              <ImageContainer file={file} setFile={setFile} />
            )}
            {activeSelector === "video" && <VideoContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeContainer;
