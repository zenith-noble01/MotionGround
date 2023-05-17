import React from "react";
import "../styles/preview.scss";
import CodePreview from "./CodePreview";

const Preview = () => {
  return (
    <div className="playground__preview">
      <div className="preview__container"></div>
      <CodePreview />
    </div>
  );
};

export default Preview;
