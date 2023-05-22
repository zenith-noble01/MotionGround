import { useState } from "react";
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
  const [name, setName] = useState("Untitled");

  const handleChangeName = (event) => {
    setName(event.target.innerText);
  };

  console.log(name);
  const handleChangeMode = () => {
    if (mode === "editor") {
      setMode("code");
    } else {
      setMode("editor");
    }
  };

  return (
    <div className="preview__header">
      <div className="header__container">
        <div className="header__name">
          <p contentEditable={true} onInput={handleChangeName}>
            {name}
          </p>
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
