import { useEffect, useState } from "react";
import { annimationTypes, directions, types } from "../constants";

const AnimateContainer = () => {
  const [annimations, setAnnimations] = useState({
    annimationType: "",
    direction: "",
    type: "",
    delay: "",
    duration: "",
  });

  const [annimType, setAnnimType] = useState("");

  const { annimationType, direction, type, delay, duration } = annimations;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "annimationType" && value === "Text Variants") {
      const newAnimations = { delay: annimations.delay };
      setAnnimations(newAnimations);
      setAnnimType("text");
    } else if (name === "annimationType" && value === "Zoom In") {
      const newAnimations = {
        delay: annimations.delay,
        duration: annimations.duration,
      };
      setAnnimations(newAnimations);
      setAnnimType("zoom");
    } else if (
      (name === "annimationType" && value === "Fade In") ||
      (name === "annimationType" && value === "Slide In") ||
      (name === "annimationType" && value === "")
    ) {
      setAnnimType("fade");
    } else {
      setAnnimations((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const renderDelayOptions = () => {
    return (
      <div className="animation__prop">
        <div className="annimationHeader">
          <p>Delay</p>
        </div>
        <div className="animation__content">
          <input
            type="number"
            name="delay"
            onChange={handleOnChange}
            placeholder="0"
            value={delay}
          />
        </div>
      </div>
    );
  };

  const renderDurationOptions = () => {
    return (
      <div className="animation__prop">
        <div className="annimationHeader">
          <p>Duration</p>
        </div>
        <div className="animation__content">
          <input
            type="number"
            name="duration"
            onChange={handleOnChange}
            placeholder="0"
            value={duration}
          />
        </div>
      </div>
    );
  };

  const renderDirectionOptions = () => {
    return (
      <div className="animation__prop">
        <div className="annimationHeader">
          <p>Direction</p>
        </div>
        <div className="animation__content">
          <select name="direction" value={direction} onChange={handleOnChange}>
            {directions.map((direction, index) => (
              <option value={direction.name} key={index}>
                {direction.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  const renderTypeOptions = () => {
    return (
      <div className="animation__prop">
        <div className="annimationHeader">
          <p>Type</p>
        </div>
        <div className="animation__content">
          <select name="type" value={type} onChange={handleOnChange}>
            {types.map((type, index) => (
              <option value={type.name} key={index}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  const renderAnimationOptions = () => {
    switch (annimType) {
      case "text":
        return renderDelayOptions();
      case "zoom":
        return (
          <>
            {renderDelayOptions()}
            {renderDurationOptions()}
          </>
        );
      case "fade":
        return (
          <>
            {renderDirectionOptions()}
            {renderTypeOptions()}
            {renderDelayOptions()}
            {renderDurationOptions()}
          </>
        );
      default:
        return (
          <>
            {renderDirectionOptions()}
            {renderTypeOptions()}
            {renderDelayOptions()}
            {renderDurationOptions()}
          </>
        );
    }
  };

  // console.log(annimationType);
  return (
    <div className="annimate__container">
      <div className="container__wrapper">
        <div className="animation__prop">
          <div className="annimationHeader">
            <p>Animation Type</p>
          </div>
          <div className="animation__content">
            <select
              name="annimationType"
              onChange={handleOnChange}
              value={annimationType}
            >
              {annimationTypes.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {renderAnimationOptions()}
      </div>
    </div>
  );
};

export default AnimateContainer;
