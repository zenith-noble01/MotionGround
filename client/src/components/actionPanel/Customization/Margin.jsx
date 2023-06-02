import React from "react";
import { RxMargin } from "react-icons/rx";
import { updateMargin } from "../../../redux/slice/customizeSlice";
import { useDispatch, useSelector } from "react-redux";

const Margin = () => {
  const dispatch = useDispatch();

  const margin = useSelector((state) => state.customize.margin);

  const handleMarginChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateMargin({ ...margin, [name]: value }));
  };

  console.log(margin);
  return (
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
  );
};

export default Margin;
