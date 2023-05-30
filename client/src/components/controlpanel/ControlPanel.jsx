import React, { useState } from "react";
import "../../styles/controlPanel.scss";
import { LayoutElements, BaseElements, Mini } from "../";

const ControlPanel = () => {
  const [active, setActive] = useState(false);
  // console.log(active);

  return (
    <div className="play__control">
      <div className="control__container">
        <div className="sm__control">
          <Mini />
        </div>
        <div className="hg__control">
          <div className="control__header">
            <button
              className={!active ? "header btn active" : "headerBtn"}
              onClick={() => setActive((prev) => !prev)}
            >
              Create
            </button>
            <button
              className={active ? "header btn active" : "headerBtn"}
              onClick={() => setActive((prev) => !prev)}
            >
              Edit
            </button>
          </div>
          <div className="elements__container">
            {!active && (
              <>
                <BaseElements />
                <LayoutElements />
              </>
            )}
            {active && <div>editor</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
