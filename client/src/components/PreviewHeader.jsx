import { createEditor } from "slate";

const PreviewHeader = ({ mode, setMode }) => {
  const handleChangeMode = () => {
    if (mode === "editor") {
      setMode("code");
    } else {
      setMode("editor");
    }
  };

  const editor = createEditor();
  editor.isInline = (element) => element.type === "mention";

  console.log(editor);

  return (
    <div className="preview__header">
      <div className="header__container">
        <div className="header__name"></div>
        <div className="toggle__container">
          <button onClick={handleChangeMode}>
            {mode === "editor" ? "Editor mode" : "Code mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewHeader;
