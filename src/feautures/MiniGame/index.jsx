import React from "react";
import { Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage/GamePage";
import GameDetail from "./components/GameDetails/GameDetail";
import { GamePlayProvider } from "./context/GamePlayContext";

export default function MiniGame() {
  return (
    <div>
      <GamePlayProvider>
        <Routes>
          <Route path="/" element={<GamePage />} exact />
          <Route path="/:gameId" element={<GameDetail />} />
        </Routes>
      </GamePlayProvider>
    </div>
  );
}
