import React from "react";
import "../styles/codepreview.scss";
import { FaCode, FaFileDownload } from "react-icons/fa";
import Code from "./Code";

const CodePreview = ({ mode, setMode }) => {
  return (
    <div
      className="playground__codepreview"
      style={{
        height: mode === "code" ? "100%" : "initial",
        border: mode === "code" ? "1px solid whitesmoke" : "none",
      }}
    >
      <div className="codepreview__container">
        <div
          className="code__header"
          style={{ background: mode === "code" ? "#444444" : "blue" }}
        >
          <div className="left__header">
            <p>
              <FaCode />
              Code
            </p>
          </div>
          {mode === "code" && (
            <button onClick={() => setMode("editor")} className="back">
              Back to Editor mode
            </button>
          )}
          <div className="right__header">
            <p>
              <FaFileDownload />
              Download Code
            </p>
          </div>
        </div>
        <div
          className="codepreview__code"
          style={{ display: mode === "code" ? "block" : "none" }}
        >
          <Code />
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
