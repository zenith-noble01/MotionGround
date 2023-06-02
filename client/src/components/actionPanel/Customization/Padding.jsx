import React from "react";
import { RxPadding } from "react-icons/rx";
import { updatePadding } from "../../../redux/slice/customizeSlice";
import { useDispatch, useSelector } from "react-redux";

const Padding = () => {
  const dispatch = useDispatch();

  const padding = useSelector((state) => state.customize.padding);

  const handlePaddingChange = (event) => {
    const { name, value } = event.target;
    dispatch(updatePadding({ ...padding, [name]: value }));
  };
  return (
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
  );
};

export default Padding;
