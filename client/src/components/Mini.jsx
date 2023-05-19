import React from "react";
import "../styles/mini.scss";
import { user } from "../assets";

const Mini = () => {
  return (
    <div className="mini">
      <div className="mini__container">
        <div className="mini__routes"></div>
        <div className="mini__profile">
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mini;
