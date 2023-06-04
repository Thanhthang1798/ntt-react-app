import React from "react";
import giftopen from "../../../assets/gift-open.png";

export default function Step3({ handleClick }) {
  return (
    <div className="step3">
      <div className="gift-open">
        <div className="left">
          <div className="title">Chúc mừng bạn đã trúng thưởng</div>
          <div className="content">
            <ul>
              <li>Phần thưởng của bạn là 1 món quà đặc biệt và bí mật</li>
              <li>Phần quà có giá trị về mặt tinh thần.</li>
              <li>Cảm ơn bạn đã chơi game cùng tôi!</li>
            </ul>
          </div>
          <button
            onClick={() => handleClick(1)}
            className="btn button-game exit"
          >
            EXIT NOW
          </button>
        </div>
        <div className="right">
          <img src={giftopen} alt="giftopen " />
        </div>
      </div>
    </div>
  );
}
