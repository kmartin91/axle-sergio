import React from "react";

import "./Rico.css";
import RicoGif from "../../Assets/gif/rico.gif";
import MehdiGif from "../../Assets/gif/mehdi.gif";
import Patrick from "../../Assets/gif/patrick.gif";

/**
 * Rico
 */
const Rico = (keyGif, className = "") => {
  let gifToLoad = RicoGif;
  switch (keyGif.keyGif) {
    case "mehdi":
      gifToLoad = MehdiGif;
      break;
    case "rico":
      gifToLoad = RicoGif;
      break;
    case "patrick":
      gifToLoad = Patrick;
      break;
    default:
      gifToLoad = RicoGif;
      break;
  }

  return (
    <div className={`${className} Rico`}>
      <img src={gifToLoad} alt="Rico" />
    </div>
  );
};

export default Rico;
