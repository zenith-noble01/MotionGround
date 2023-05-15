import React from "react";
import "../styles/playground.scss";
import { CodePreview, ControlPanel, Preview } from "../components";

const Playground = () => {
  return (
    <div className="app__playground">
      <div className="playground__container">
        {/* control panel and  live preview */}
        <div className="playground__wrapper">
          <ControlPanel />
          <Preview />
        </div>
        {/* code preview and editor */}
        <div className="codePreview">
          <CodePreview />
        </div>
      </div>
    </div>
  );
};

export default Playground;
