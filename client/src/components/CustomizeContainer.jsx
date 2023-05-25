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
        </div>
        <div className="customize">
          <div className="header">Dimensioins</div>
        </div>
        <div className="customize">
          <div className="header">Background</div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeContainer;
