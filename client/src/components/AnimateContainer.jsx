const AnimateContainer = () => {
  return (
    <div className="annimate__container">
      <div className="container__wrapper">
        <div className="animation__prop">
          <div className="annimationHeader">
            <p>Direction</p>
          </div>
          <div className="animation__content">
            <select name="annimation type"></select>
          </div>
        </div>
        <div className="animation__prop">
          <div className="annimationHeader">
            <p>Animation type</p>
          </div>
          <div className="animation__content">
            <select name="annimation type"></select>
          </div>
        </div>
        <div className="animation__prop">
          <div className="annimationHeader">
            <p>Delay</p>
          </div>
          <div className="animation__content">
            <input type="number" name="" id="" />
          </div>
        </div>
        <div className="animation__prop">
          <div className="annimationHeader">
            <p>Duration</p>
          </div>
          <div className="animation__content">
            <input type="number" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateContainer;
