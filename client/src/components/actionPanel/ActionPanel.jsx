import { useDispatch, useSelector } from "react-redux";
import { toggleComponent } from "../../redux/slice/ActionPanelToogleSlice";
import "../../styles/actionPanel.scss";
import { AnimateContainer, CustomizeContainer } from "../";

const ActionPanel = () => {
  const dispatch = useDispatch();

  const activeComponent = useSelector(
    (state) => state.actionPanel.activeComponent
  );

  const handleToggle = (component) => {
    dispatch(toggleComponent(component));
  };

  return (
    <div className="playground__actionPanel">
      <div className="actionpanel__container">
        <div className="panel__header">
          <button
            className={
              activeComponent === "animate" ? "header btn active" : "headerBtn"
            }
            onClick={() => handleToggle("animate")}
          >
            Animate
          </button>
          <button
            className={
              activeComponent === "customize"
                ? "header btn active"
                : "headerBtn"
            }
            onClick={() => handleToggle("customize")}
          >
            Customize
          </button>
        </div>
        <div className="wrapper">
          {activeComponent === "animate" && <AnimateContainer />}
          {activeComponent === "customize" && <CustomizeContainer />}
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;
