import { GamePlayContext } from "../../../context/GamePlayContext";
import React, { useContext, useEffect, useState } from "react";
import Step1 from "../General/Step1";
import Step2 from "../General/Step2";
import Step3 from "../General/Step3";

export default function Game2() {
  const { gameId } = useContext(GamePlayContext);
  const [stepGame, setStepGame] = useState(1);

  useEffect(() => {
    console.log("gameid: " + gameId);
  }, []);

  useEffect(() => {
    console.log("gameid is change: " + gameId);
  }, [gameId]);

  const updateStepGame = (num) => {
    setStepGame(num);
  };

  return (
    <div>
      <h1>Game 2 - {gameId}</h1>
      <div id="game">
        {stepGame === 1 && <Step1 handleClick={updateStepGame}></Step1>}
        {stepGame === 2 && <Step2 handleClick={updateStepGame}></Step2>}
        {stepGame === 3 && <Step3 handleClick={updateStepGame}></Step3>}
      </div>
    </div>
  );
}
