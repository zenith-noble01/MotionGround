import { RxMargin, RxPadding } from "react-icons/rx";
import "../styles/custimize.scss";
import { useState } from "react";

const CustomizeContainer = () => {
  const [activeSelector, setActiveSelector] = useState("color");

  const handleSelectorClick = (selector) => {
    setActiveSelector(selector);
  };

  return (
    <div className="customize__container">
      <div className="customize__content">
        <div className="customize">
          <div className="header">Spacing</div>
          <div className="customizer">
            <p>
              <RxPadding /> Padding
            </p>
            <div className="space__content">
              <input type="number" placeholder="0" />
              <input type="number" placeholder="0" />
              <input type="number" placeholder="0" />
              <input type="number" placeholder="0" />
            </div>
          </div>
          <div className="customizer">
            <p>
              <RxMargin /> Margin
            </p>
            <div className="space__content">
              <input type="number" placeholder="u" />
              <input type="number" placeholder="r" />
              <input type="number" placeholder="b" />
              <input type="number" placeholder="l" />
            </div>
          </div>
        </div>
        {/* <div className="customize">
          <div className="header">Dimensioins</div>
          <div className="customizer">
            <div className="x"></div>
          </div>
        </div> */}
        <div className="customize">
          <div className="header">Background</div>
          <div className="bg__container">
            <div className="selectors">
              <div
                className={`selector ${
                  activeSelector === "color" ? "active" : ""
                }`}
                onClick={() => handleSelectorClick("color")}
              >
                Color
              </div>
              <div
                className={`selector ${
                  activeSelector === "image" ? "active" : ""
                }`}
                onClick={() => handleSelectorClick("image")}
              >
                Image
              </div>
              <div
                className={`selector ${
                  activeSelector === "video" ? "active" : ""
                }`}
                onClick={() => handleSelectorClick("video")}
              >
                Video
              </div>
            </div>
            {/* showing elements based on the one they choised */}
            {activeSelector === "color" && (
              <div className="color__container">colors</div>
            )}
            {activeSelector === "image" && (
              <div className="image__container">image</div>
            )}
            {activeSelector === "video" && (
              <div className="video__container">
                <p>coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeContainer;
