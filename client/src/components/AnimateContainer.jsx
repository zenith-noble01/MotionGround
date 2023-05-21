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

  const [annimType, setAnnimType] = useState(false);

  const { annimationType, direction, type, delay, duration } = annimations;

  const handleOnChange = (e) => {
    setAnnimations((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (annimationType === "Text Variants") {
      setAnnimType(true);
    } else {
      setAnnimType(false);
    }
  }, [annimationType]);

  return (
    <div className="annimate__container">
      <div className="container__wrapper">
        <div className="animation__prop">
          <div className="annimationHeader">
            <p>Annimation Type</p>
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
        <div className="animation__prop">
          <div className="annimationHeader">
            <p>Direction</p>
          </div>
          <div className="animation__content">
            <select
              name="direction"
              value={direction}
              onChange={handleOnChange}
            >
              {directions.map((direction, index) => (
                <option value={direction.name} key={index}>
                  {direction.name}
                </option>
              ))}
            </select>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default AnimateContainer;
