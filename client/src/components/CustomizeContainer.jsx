import { RxMargin, RxPadding } from "react-icons/rx";
import "../styles/custimize.scss";
import { useState } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
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

const ColorContainer = ({
  color,
  styles,
  handleClick,
  displayColorPicker,
  hex,
  alpha,
  handleClose,
  handleChange,
}) => {
  return (
    <div className="color__container">
      <div className="color__preview">
        <div style={styles.swatch} onClick={handleClick}>
          <div style={styles.color} />
        </div>
        {displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={handleClose} />
            <SketchPicker color={color} onChange={handleChange} />
          </div>
        ) : null}
        <p>#{hex}</p>
      </div>

      <div className="color__opacity">
        <p style={styles.alpha}>{alpha}</p>
        <span>%</span>
      </div>
    </div>
  );
};

const ImageContainer = ({ file, setFile }) => {
  const [assets, setAssets] = useState(false);

  console.log(assets);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setFile(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <div className="image__container">
      {file ? (
        <div className="file__cont">
          <img src={URL.createObjectURL(file)} alt="" />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={isDragActive ? "active imagedrop" : "imagedrop"}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="dropandbrowse">
              <p>
                Drag & drop or <span>browse</span>
              </p>

              <span>jpg, png, svg or gif</span>
            </div>
          )}
        </div>
      )}
      <div className="option__container">
        <button onClick={() => setAssets((prev) => !prev)}>Use assets</button>
        <select>
          <option value="">Cover</option>
          <option value="">Contain</option>
          <option value="">Fit</option>
        </select>

        {assets && (
          <div className="assets__container">
            {[...new Array(6)].map((_, index) => (
              <div className="asset" key={index}>
                asset
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const VidoeContainer = ({}) => {
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="video__container">
      <input
        type="text"
        onChange={(e) => setLink(e.target.value)}
        placeholder="Vimeo or youtube video link"
      />
      <button type="submit" style={{ display: "none" }}>
        submit
      </button>
    </form>
  );
};
