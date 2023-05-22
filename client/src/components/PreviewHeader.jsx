import { createEditor } from "slate";
import { useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import {
  AiFillPauseCircle,
  AiOutlineReload,
  AiFillPlayCircle,
} from "react-icons/ai";

const PreviewHeader = ({
  mode,
  setUseNewAnimation,
  setMode,
  setAnimationKey,
  useNewAnimation,
  buttonActive,
}) => {
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Untitled" }],
    },
  ]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeMode = () => {
    if (mode === "editor") {
      setMode("code");
    } else {
      setMode("editor");
    }
  };

  const editor = createEditor();
  editor.isInline = (element) => element.type === "mention";

  return (
    <div className="preview__header">
      <div className="header__container">
        <div className="header__name">
          <Slate
            editor={withReact(editor)}
            value={value}
            onChange={handleChange}
          >
            <Editable />
          </Slate>
        </div>
        <div className="toggle__container">
          <button onClick={handleChangeMode}>
            {mode === "editor" ? "Editor mode" : "Code mode"}
          </button>
          <div className="action_">
            <button
              onClick={() =>
                setUseNewAnimation((currentValue) => !currentValue)
              }
              className={buttonActive ? "active" : ""}
            >
              {useNewAnimation ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
            </button>
            <button onClick={() => setAnimationKey(Math.random())}>
              <AiOutlineReload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewHeader;
