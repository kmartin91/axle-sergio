import React, { useState } from "react";
import useInterval from "../../hooks/useInterval";
import Rico from "../Rico/Rico";

const allKeys = ["rico", "mehdi", "patrick", "julien", "xavier"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * GifLoader
 */
const GifLoader = () => {
  const [keyGif, setKeyGif] = useState(allKeys[0]);
  useInterval(() => {
    const index = getRandomInt(allKeys.length);
    setKeyGif(allKeys[index]);
  }, 10000);

  return (
    <div className="GifLoader">
      <Rico keyGif={keyGif} />
    </div>
  );
};

export default GifLoader;
