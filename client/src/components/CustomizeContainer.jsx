import { RxMargin, RxPadding } from "react-icons/rx";
import "../styles/custimize.scss";

const CustomizeContainer = () => {
  return (
    <div className="customize__container">
      <div className="customize__header">
        <p>Customize your Elements</p>
      </div>
      <div className="customize__content">
        <div className="customize">
          <div className="header">Spacing</div>
          <div className="customizer">
            <p>
              <RxPadding /> Padding
            </p>
            <div className="space__content">
              <input type="number" placeholder="u" />
              <input type="number" placeholder="r" />
              <input type="number" placeholder="b" />
              <input type="number" placeholder="l" />
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
        </div>
      </div>
    </div>
  );
};

export default CustomizeContainer;
