import React from "react";
import "../styles/baseelements.scss";
import { baseElements } from "../constants";

const BaseElements = () => {
  return (
    <div className="base__elements">
      <div className="base__container">
        <div className="base__header">
          <p>Base Elements</p>
        </div>
        <div className="base__content">
          {baseElements.map((el, index) => (
            <div className="base" key={index}>
              <el.icon />
              {el.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseElements;
