import { SketchPicker } from "react-color";

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

export default ColorContainer;
