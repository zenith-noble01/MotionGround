import { RxMargin } from "react-icons/rx";
import "../../../styles/custimize.scss";
import { useState } from "react";
import reactCSS from "reactcss";
import { useSelector, useDispatch } from "react-redux";
import { updateBackground } from "../../../redux/slice/customizeSlice";
import {
  ColorContainer,
  ImageContainer,
  Margin,
  Padding,
  VideoContainer,
} from "../..";

const CustomizeContainer = () => {
  const [activeSelector, setActiveSelector] = useState("color");
  const [file, setFile] = useState(null);

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({ r: "241", g: "112", b: "19", a: "1" });
  const [alpha, setAlpha] = useState("100");

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

  const handleChange = (color) => {
    setColor(color.rgb);
    setAlpha(color.rgb.a * 100);
  };

  const handleSelectorClick = (selector) => {
    setActiveSelector(selector);
  };

  const hex =
    color.r.toString(16) + color.g.toString(16) + color.b.toString(16);

  const dispatch = useDispatch();
  const background = useSelector((state) => state.customize.background);

  const handleBackgroundChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateBackground({ ...background, [name]: value }));
  };

  return (
    <div className="customize__container">
      <div className="customize__content">
        <div className="customize">
          <div className="header">Spacing</div>
          <Padding />
          <Margin />
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
                color={color}
                styles={styles}
                handleClick={handleClick}
                displayColorPicker={displayColorPicker}
                hex={hex}
                alpha={alpha}
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
