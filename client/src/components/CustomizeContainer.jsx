import { RxMargin, RxPadding } from "react-icons/rx";
import "../styles/custimize.scss";
import { useState } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

const CustomizeContainer = () => {
  const [activeSelector, setActiveSelector] = useState("color");

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({ r: "241", g: "112", b: "19", a: "1" });

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        borderRadius: "5px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
        height: "20px",
        width: "20px",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
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
  };

  const handleSelectorClick = (selector) => {
    setActiveSelector(selector);
  };

  return (
    <div className="customize__container">
      <div className="customize__content">
        <div className="customize">
          <div className="header">Spacing</div>
          <div className="customizer">
            <p>
              <RxPadding /> Padding
            </p>
            <div className="space__content">
              <div className="space">
                <span>up:</span> <input type="number" placeholder="0" />
              </div>
              <div className="space">
                <span>right:</span> <input type="number" placeholder="0" />
              </div>
              <div className="space">
                <span>bottom:</span> <input type="number" placeholder="0" />
              </div>
              <div className="space">
                <span>left:</span> <input type="number" placeholder="0" />
              </div>
            </div>
          </div>
          <div className="customizer">
            <p>
              <RxMargin /> Margin
            </p>
            <div className="space__content">
              <div className="space">
                <span>up:</span> <input type="number" placeholder="0" />
              </div>
              <div className="space">
                <span>right:</span> <input type="number" placeholder="0" />
              </div>
              <div className="space">
                <span>bottom:</span> <input type="number" placeholder="0" />
              </div>
              <div className="space">
                <span>left:</span> <input type="number" placeholder="0" />
              </div>
            </div>
          </div>
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
              <div className="color__container">
                <div>
                  <div style={styles.swatch} onClick={handleClick}>
                    <div style={styles.color} />
                  </div>
                  {displayColorPicker ? (
                    <div style={styles.popover}>
                      <div style={styles.cover} onClick={handleClose} />
                      <SketchPicker color={color} onChange={handleChange} />
                    </div>
                  ) : null}
                </div>
                <div className="color__opacity">
                  <input type="number" max={100} />
                  <span>%</span>
                </div>
              </div>
            )}
            {activeSelector === "image" && (
              <div className="image__container">image</div>
            )}
            {activeSelector === "video" && (
              <div className="video__container">
                <p>coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeContainer;
