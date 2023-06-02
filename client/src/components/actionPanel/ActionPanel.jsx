import React, { useState } from "react";
import "../../styles/actionPanel.scss";
import { AnimateContainer, CustomizeContainer } from "../";

const ActionPanel = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="playground__actionPanel">
      <div className="actionpanel__container">
        <div className="panel__header">
          <button
            className={!active ? "header btn active" : "headerBtn"}
            onClick={() => setActive((prev) => !prev)}
          >
            Annimate
          </button>
          <button
            className={active ? "header btn active" : "headerBtn"}
            onClick={() => setActive((prev) => !prev)}
          >
            Customize
          </button>
        </div>
        <div className="wrapper">
          {!active && (
            <AnimateContainer data={data} onDataChange={handleDataChange} />
          )}
          {active && (
            <CustomizeContainer data={data} onDataChange={handleDataChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleComponent } from "../store/componentSlice";
// import "../../styles/actionPanel.scss";
// import { AnimateContainer, CustomizeContainer } from "..";

// const ActionPanel = () => {
//   const dispatch = useDispatch();
//   const animate = useSelector((state) => state.component.animate);
//   const customize = useSelector((state) => state.component.customize);

//   const handleToggle = (component, data) => {
//     dispatch(toggleComponent({ component, data }));
//   };

//   return (
//     <div className="playground__actionPanel">
//       <div className="actionpanel__container">
//         <div className="panel__header">
//           <button
//             className={animate.active? "header btn active" : "headerBtn"}
//             onClick={() => handleToggle("animate", animate.data)}
//           >
//             Animate
//           </button>
//           <button
//             className={customize.active? "header btn active" : "headerBtn"}
//             onClick={() => handleToggle("customize", customize.data)}
//           >
//             Customize
//           </button>
//         </div>
//         <div className="wrapper">
//           {animate.active && <AnimateContainer data={animate.data} />}
//           {customize.active && <CustomizeContainer data={customize.data} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActionPanel;
