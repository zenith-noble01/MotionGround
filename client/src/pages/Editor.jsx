import React, { useState, useEffect } from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";

const FileUploader = ({ onFileLoad }) => {
  return <input type="file" onChange={(e) => onFileLoad(e.target.files[0])} />;
};

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [theme, setTheme] = useState("vs-light");
  const [file, setFile] = useState();
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    if (file) {
      var reader = new FileReader();
      reader.onload = async (e) => {
        setCode(e.target.result);
      };
      reader.readAsText(file);
      let newLanguage = "javascript";
      const extension = file.name.split(".").pop();
      if (["css", "html", "json", "python", "dart"].includes(extension)) {
        newLanguage = extension;
      }
      setLanguage(newLanguage);
    }
  }, [file]);

  const setDarkTheme = (e) => {
    e.preventDefault();
    setTheme((prev) => (prev === "vs-dark" ? "hc-black" : "vs-dark"));
  };

  const setLightTheme = (e) => {
    e.preventDefault();
    setTheme("vs-light");
  };

  const options = {
    autoIndent: "full",
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  return (
    <div>
      <div>
        <button onClick={setDarkTheme} type="button">
          Set dark theme ({theme === "vs-dark" ? "hc-black" : "vs-dark"})
        </button>
        {theme !== "vs-light" && (
          <button onClick={setLightTheme} type="button">
            Set light theme
          </button>
        )}
        <FileUploader onFileLoad={setFile} />
      </div>
      <hr />
      <MonacoEditor
        height="400"
        language={language}
        // editorWillMount={editorWillMount}
        value={code}
        options={options}
        theme={theme}
      />
    </div>
  );
};

const DiffEditor = () => {
  const [code, setCode] = useState('const a = "Hello Monaco"');
  const [original, setOriginal] = useState('const a = "Hello World"');

  useEffect(() => {
    setCode(original);
  }, [original]);

  const onChange = (newValue) => {
    console.log("onChange", newValue); // eslint-disable-line no-console
  };

  return (
    <div>
      <button onClick={() => setCode(original)} type="button">
        Reset
      </button>
      <hr />
      <MonacoDiffEditor
        width="800"
        height="300"
        language="javascript"
        value={code}
        original={original}
        onChange={onChange}
      />
    </div>
  );
};

const App = () => (
  <div>
    <h2>Monaco Editor Sample (controlled mode)</h2>
    <CodeEditor />
    <hr />
    <hr />
    <h2>Another editor (showing a diff)</h2>
    <DiffEditor />
  </div>
);

export default App;
