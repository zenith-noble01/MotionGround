import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import reactCSS from "reactcss";
import { updateTextColor } from "../../../redux/slice/TextColorSlice";
import { rgbToHex } from "../../../redux/slice/TextColorSlice";
import { updateTextHex } from "../../../redux/slice/TextColorSlice";

import "../../../styles/textColor.scss";

const ColorPiker = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const { textColor: color, textHex: hex } = useSelector(
    (state) => state.textColor
  );

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

  const dispatch = useDispatch();
  //   const { color, hex } = useSelector((state) => state.textColor);

  const getColorProps = (color) => {
    if (!color || !color.r || !color.g || !color.b || !color.a) {
      color = { r: 0, g: 0, b: 0, a: 1 };
    }
    return { r: color.r, g: color.g, b: color.b, a: color.a };
  };

  const colorProps = getColorProps(color);

  const handleChangeComplete = (color) => {
    const { r, g, b, a } = color.rgb;
    const hex = rgbToHex(r, g, b);
    dispatch(updateTextColor({ r, g, b, a }));
    dispatch(updateTextHex({ hex }));
  };

  const handleClick = () => {
    setDisplayColorPicker((prev) => !prev);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const alpha = color.a;

  return (
    <div className="textColor__container">
      <div className="color__preview">
        <div style={styles.swatch} onClick={handleClick}>
          <div style={styles.color} />
        </div>
        {displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={handleClose} />
            <SketchPicker color={colorProps} onChange={handleChangeComplete} />
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

export default ColorPiker;
