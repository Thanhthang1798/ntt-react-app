import React from "react";
import { Route, Routes } from "react-router";
import ChirstMasTemp from "./Chirstmas";
import LunarNewYear from "./LunarNewYear";

export default function CountDownTemp() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<h1>Home Page Component</h1>} exact />
            <Route path="/chirstmas" element={<ChirstMasTemp />} />
            <Route path="/newyear" element={<LunarNewYear />} />
          </Routes>
      </div>
    );
  }
  