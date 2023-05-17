import React from "react";
import "../styles/codepreview.scss";
import { FaCode } from "react-icons/fa";
import Code from "./Code";

const CodePreview = () => {
  return (
    <div className="playground__codepreview">
      <div className="codepreview__container">
        <div className="code__header">
          <FaCode />
        </div>
        <div className="codepreview__code" /* styles={{ display: "none" } } */>
          <Code />
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
