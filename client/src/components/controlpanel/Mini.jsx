import React from "react";
import "../../styles/mini.scss";
import { Link } from "react-router-dom";
import { user } from "../../assets";

const Mini = () => {
  return (
    <div className="mini">
      <div className="mini__container">
        <div className="mini__routes">
          <Link to="/dashboard">
            <div className="logo">
              <div className="abstrac1"></div>
              <div className="abstrac2"></div>
            </div>
          </Link>
        </div>
        <div className="mini__profile">
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mini;
