import React, { useState } from "react";
import "../styles/controlPanel.scss";

const ControlPanel = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="play__control">
      <div className="control__container">
        <div className="sm__control">1</div>
        <div className="hg__control">
          <div className="control__header">
            <button>Create</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
