import React from "react";
import { RxPadding } from "react-icons/rx";
import { updatePadding } from "../../../redux/slice/customizeSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/padding.scss";

const Padding = () => {
  const dispatch = useDispatch();

  const padding = useSelector((state) => state.customize.padding);

  const handlePaddingChange = (event) => {
    const { name, value } = event.target;
    dispatch(updatePadding({ ...padding, [name]: parseInt(value) }));
  };

  return (
    <div className="customizer">
      <div className="padding__container">
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="top"
            value={padding.top}
            onChange={handlePaddingChange}
          />
          <span></span>
        </div>
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="right"
            value={padding.right}
            onChange={handlePaddingChange}
          />
          <span></span>
        </div>
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="bottom"
            value={padding.bottom}
            onChange={handlePaddingChange}
          />
          <span></span>
        </div>
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="left"
            value={padding.left}
            onChange={handlePaddingChange}
          />
          <span></span>
        </div>
        Padding
      </div>
    </div>
  );
};

export default Padding;
