import React, { createContext, useEffect, useState } from "react";

export const GamePlayContext = createContext();

export const GamePlayProvider = ({ children }) => {
  const [gameId, setGameId] = useState("1");
  //   const [stepGame, setStepGame] = useState(1);

  useEffect(() => {}, [gameId]);

  return (
    <GamePlayContext.Provider value={{ gameId, setGameId }}>
      {children}
    </GamePlayContext.Provider>
  );
};
