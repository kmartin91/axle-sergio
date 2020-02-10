import React from "react";

import "./Bottle.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Bottle
 */
const Bottle = ({ left, top, invert }) => {
  const animationDelay = `${getRandomInt(3000)}ms`;
  const animation = invert
    ? `rotating-invert 10s linear ${animationDelay} infinite`
    : `rotating 10s linear ${animationDelay} infinite`;
  return (
    <div
      className="Bottle"
      style={{
        animationDelay: `${getRandomInt(1000)}ms`,
        left: left,
        top: top,
        animation: animation
      }}
    >
      <div className="Bottle__Cap" />
      <div className="Bottle__Neck" />
      <div className="Bottle__Body">
        <div className="Bottle__Label" />
      </div>
    </div>
  );
};

export default Bottle;
