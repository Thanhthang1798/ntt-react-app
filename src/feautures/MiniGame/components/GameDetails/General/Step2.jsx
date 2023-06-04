import React from "react";
import pipe from "../../../assets/pipe.png";
import gift from "../../../assets/gift.png";

export default function Step2({ handleClick }) {
  function openGift(postion) {
    // alert("BÙM" + postion);
    handleClick(3);
  }

  return (
    <div className="step2">
      <div className="title">
        <h1>Catch 1 gift box</h1>
      </div>
      <div className="game-land">
        <div className="gift-and-pipe">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="item" key={index}>
              <div className="gift" onClick={() => openGift(index)}>
                <img src={gift} />
              </div>
              <div className="pipe">
                <img src={pipe} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
