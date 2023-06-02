import React from "react";
import { updateMargin } from "../../../redux/slice/customizeSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/margin.scss";

const Margin = () => {
  const dispatch = useDispatch();

  const margin = useSelector((state) => state.customize.margin);

  const handleMarginChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateMargin({ ...margin, [name]: parseInt(value) }));
  };

  // console.log(margin);
  return (
    <div className="customizer">
      <div className="margin__container">
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="top"
            value={margin.top}
            onChange={handleMarginChange}
          />
          <span></span>
        </div>
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="right"
            value={margin.right}
            onChange={handleMarginChange}
          />
          <span></span>
        </div>
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="bottom"
            value={margin.bottom}
            onChange={handleMarginChange}
          />
          <span></span>
        </div>
        <div className="input__container">
          <input
            type="number"
            placeholder="0"
            name="left"
            value={margin.left}
            onChange={handleMarginChange}
          />
          <span></span>
        </div>
        Margin
      </div>
    </div>
  );
};

export default Margin;
