import React from "react";
import Rico from "./Component/Rico/Rico";
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
      <Rico />
      {new Array(50).fill(0).map((key, index) => {
        const left = getRandomInt(width - 100);
        const top = getRandomInt(height - 100);
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
