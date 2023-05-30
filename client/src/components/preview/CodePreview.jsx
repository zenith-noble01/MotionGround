import React from "react";
import { saveAs } from "file-saver";
import "../../styles/codepreview.scss";
import { FaCode, FaFileDownload } from "react-icons/fa";
import Code from "./Code";
import { useSelector } from "react-redux";

const CodePreview = ({ mode, setMode }) => {
  const handleBackButtonClick = () => {
    setMode("editor");
  };

  const name = useSelector((state) => state.headerName.name);

  // console.log(name);

  const handleDownloadClick = () => {
    const codeBlock = getCodeBlock();
    const blob = new Blob([codeBlock], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${name}.jsx`);
  };

  const getCodeBlock = () => {
    const codeBlockElement = document.querySelector(".codepreview__code pre");

    if (codeBlockElement) {
      return codeBlockElement.innerText.trim();
    } else {
      return "";
    }
  };

  return (
    <div
      className="playground__codepreview"
      style={{
        height: mode === "code" ? "100%" : "initial",
        border: mode === "code" ? "1px solid whitesmoke" : "none",
      }}
    >
      <div className="codepreview__container">
        <div className="code__header" style={{ background: "#33333333" }}>
          <div className="left__header">
            <p>
              <FaCode />
              Code
            </p>
          </div>
          {mode === "code" && (
            <button onClick={handleBackButtonClick} className="back">
              Back to Editor mode
            </button>
          )}
          <div className="right__header">
            <button onClick={handleDownloadClick}>
              <FaFileDownload />
              Download Code
            </button>
          </div>
        </div>
        <div
          className="codepreview__code"
          style={{ display: mode === "code" ? "block" : "none" }}
        >
          <Code mode={mode} />
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
