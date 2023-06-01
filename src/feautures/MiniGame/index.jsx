import React from "react";
import { Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage/GamePage";
import Game1 from "./components/GameDetails/Game1/Game1";

export default function MiniGame() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GamePage />} exact />
        <Route path="/1" element={<Game1 />} />
      </Routes>
    </div>
  );
}
