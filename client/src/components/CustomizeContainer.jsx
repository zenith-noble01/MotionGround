import { RxMargin, RxPadding } from "react-icons/rx";
import "../styles/custimize.scss";
import { useState } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePadding,
  updateMargin,
  updateBackground,
} from "../redux/slice/customizeSlice";

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
  const padding = useSelector((state) => state.customize.padding);
  const margin = useSelector((state) => state.customize.margin);
  const background = useSelector((state) => state.customize.background);

  const handlePaddingChange = (event) => {
    const { name, value } = event.target;
    dispatch(updatePadding({ ...padding, [name]: value }));
  };

  const handleMarginChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateMargin({ ...margin, [name]: value }));
  };

  const handleBackgroundChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateBackground({ ...background, [name]: value }));
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
                <span>up:</span>{" "}
                <input
                  type="number"
                  name="top"
                  value={padding.top}
                  onChange={handlePaddingChange}
                />
              </div>
              <div className="space">
                <span>right:</span>{" "}
                <input
                  type="number"
                  name="right"
                  value={padding.right}
                  onChange={handlePaddingChange}
                />
              </div>
              <div className="space">
                <span>bottom:</span>{" "}
                <input
                  type="number"
                  name="bottom"
                  value={padding.bottom}
                  onChange={handlePaddingChange}
                />
              </div>
              <div className="space">
                <span>left:</span>{" "}
                <input
                  type="number"
                  name="left"
                  value={padding.left}
                  onChange={handlePaddingChange}
                />
              </div>
            </div>
          </div>

          <div className="customizer">
            <p>
              <RxMargin /> Margin
            </p>
            <div className="space__content">
              <div className="space">
                <span>up:</span>{" "}
                <input
                  type="number"
                  name="top"
                  value={margin.top}
                  onChange={handleMarginChange}
                />
              </div>
              <div className="space">
                <span>right:</span>{" "}
                <input
                  type="number"
                  name="right"
                  value={margin.right}
                  onChange={handleMarginChange}
                />
              </div>
              <div className="space">
                <span>bottom:</span>{" "}
                <input
                  type="number"
                  name="bottom"
                  value={margin.bottom}
                  onChange={handleMarginChange}
                />
              </div>
              <div className="space">
                <span>left:</span>{" "}
                <input
                  type="number"
                  name="left"
                  value={margin.left}
                  onChange={handleMarginChange}
                />
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
            {activeSelector === "video" && <VidoeContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeContainer;
