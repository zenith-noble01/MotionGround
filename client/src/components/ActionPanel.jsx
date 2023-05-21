import React, { useState } from "react";
import "../styles/actionPanel.scss";
import { AnimateContainer, CustomizeContainer } from "./";

const ActionPanel = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="playground__actionPanel">
      <div className="actionpanel__container">
        <div className="panel__header">
          <button
            className={!active ? "header btn active" : "headerBtn"}
            onClick={() => setActive((prev) => !prev)}
          >
            Annimate
          </button>
          <button
            className={active ? "header btn active" : "headerBtn"}
            onClick={() => setActive((prev) => !prev)}
          >
            Customize
          </button>
        </div>
        <div className="wrapper">
          {!active && <AnimateContainer />}
          {active && <CustomizeContainer />}
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;
