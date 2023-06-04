import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GameDetail.css";
import { GamePlayContext } from "../../context/GamePlayContext";
import Game1 from "./Game1/Game1";
import Game2 from "./Game2/Game2";

// creat componentMap to show component and param map
const componentMap = {
  Game1: Game1,
  Game2: Game2,
};
// this component to switch game match by param
export default function GameDetail() {
  const { gameId, setGameId } = useContext(GamePlayContext);
  const param = useParams();

  const [gameComponents, setGameComponents] = useState([]);

  const componentsToRender = gameComponents.map(
    (gameName) => componentMap[gameName]
  );

  useEffect(() => {
    console.log(param.gameId);
    setGameId(param.gameId);

    console.log(gameId);
    // var index = Object.keys(componentMap).findIndex(
    //   (key) => componentMap[key] === gameId
    // );
    var index = Object.keys(componentMap).findIndex(
      (key) => key === param.gameId
    );
    console.log(index);
    if (index >= 0) {
      setGameComponents([param.gameId]);
    }
  }, [param, gameId, setGameId]);
  return (
    <>
      {/* <Game1></Game1> */}
      {componentsToRender.length > 0 ? (
        componentsToRender.map((Component, index) => <Component key={index} />)
      ) : (
        <div>Không tồn tại</div>
      )}
    </>
  );
}
