import React, { useState } from "react";
import "../styles/actionPanel.scss";

const ActionPanel = () => {
  const [action, setAction] = useState(true);
  return (
    <div className="playground__actionPanel">
      <div className="panel__header">
        <button>Annimate</button>
        <button>Customize</button>
      </div>
    </div>
  );
};

export default ActionPanel;
