import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import {
  rgbToHex,
  setColor,
  updateHex,
} from "../../../../redux/slice/ColorSlice";

const ColorContainer = ({
  styles,
  handleClick,
  displayColorPicker,
  alpha,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const { color, hex } = useSelector((state) => state.bgColor);

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
    dispatch(setColor({ r, g, b, a }));
    dispatch(updateHex({ hex }));
  };

  return (
    <div className="color__container">
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

export default ColorContainer;
