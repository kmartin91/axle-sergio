import React from "react";
import GifLoader from "./Component/GifLoader/GifLoader";
import Bottle from "./Component/Bottle/Bottle";
import useWindowDimensions from "./hooks/useWindowDimensions";
import "./App.css";

const bottles = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <div className="App__Overlay" />
      <GifLoader />
      {new Array(50).fill(0).map((key, index) => {
        const left = getRandomInt(width - 200);
        const top = getRandomInt(height - 200);
        bottles.push({ x: left, y: top });

        return (
          <Bottle
            key={`bottle-${index}`}
            invert={index % 2 === 0}
            top={top}
            left={left}
          />
        );
      })}
    </div>
  );
}

export default App;
