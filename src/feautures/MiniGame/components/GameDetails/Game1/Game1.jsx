import bg from "./assets/bg.png";
import React from "react";

export default function Game1() {
  return (
    <div>
      <h1>Game here Demo</h1>
      <div id="game">
        <div className="step0">
          <img src={bg} alt="bg game" />
        </div>
      </div>
    </div>
  );
}
