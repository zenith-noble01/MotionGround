import React, { useState } from "react";
import "../styles/preview.scss";
import { CodePreview, PreviewHeader } from "./";

const Preview = () => {
  const [mode, setMode] = useState("editor");

  return (
    <div className="playground__preview">
      <div className="preview__container">
        <PreviewHeader mode={mode} setMode={setMode} />
      </div>
      <CodePreview mode={mode} setMode={setMode} />
    </div>
  );
};

export default Preview;
