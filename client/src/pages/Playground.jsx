import React from "react";
import "../styles/playground.scss";
import { ActionPanel, CodePreview, ControlPanel, Preview } from "../components";

const Playground = () => {
  return (
    <div className="app__playground">
      <div className="playground__container">
        <div className="playground__wrapper">
          <ControlPanel />
          <Preview />
          <ActionPanel />
        </div>
      </div>
    </div>
  );
};

export default Playground;
