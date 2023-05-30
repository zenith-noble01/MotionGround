import { useSelector, useDispatch } from "react-redux";
import {
  AiFillPauseCircle,
  AiOutlineReload,
  AiFillPlayCircle,
} from "react-icons/ai";
import ContentEditable from "react-contenteditable";

import { setName } from "../../redux/slice/headerName";

const PreviewHeader = ({
  mode,
  setUseNewAnimation,
  setMode,
  setAnimationKey,
  useNewAnimation,
  buttonActive,
}) => {
  const name = useSelector((state) => state.headerName.name);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    if (mode === "editor") {
      setMode("code");
    } else {
      setMode("editor");
    }
  };

  const handleChange = (evt) => {
    const newName = evt.target.value;
    let formattedName = newName.trim();

    // Check if the first letter of the name is lowercase and change it to uppercase
    if (formattedName.charAt(0) === formattedName.charAt(0).toLowerCase()) {
      formattedName =
        formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    }

    // Remove any spaces between words
    formattedName = formattedName.replace(/\s+/g, "");

    dispatch(setName(formattedName));
  };

  // console.log(name);

  return (
    <div className="preview__header">
      <div className="header__container">
        <div className="header__name">
          <ContentEditable
            html={name}
            onChange={handleChange}
            className="content"
          />
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
