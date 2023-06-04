import React from "react";

export default function Step1({ handleClick }) {
  return (
    <div className="step1">
      <button onClick={() => handleClick(2)} className="btn button-game">
        {" "}
        Chơi ngay{" "}
      </button>
    </div>
  );
}
