import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { annimationTypes, directions, types } from "../../constants";
import {
  selectAnimateContainer,
  setAnnimationProperty,
  setAnnimationType,
  resetAnnimations,
} from "../../redux/slice/annimations";

const AnimateContainer = () => {
  const dispatch = useDispatch();

  const { annimationType, direction, type, delay, duration, annimType } =
    useSelector(selectAnimateContainer);

  useEffect(() => {
    return () => {
      dispatch(resetAnnimations());
    };
  }, [dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "annimationType") {
      dispatch(setAnnimationType(value));
    } else {
      dispatch(setAnnimationProperty({ name, value }));
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
      case "slide":
        return (
          <>
            {renderDirectionOptions()}
            {renderTypeOptions()}
            {renderDelayOptions()}
            {renderDurationOptions()}
          </>
        );
      case "nothing":
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

  // console.log(duration, annimType);

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
