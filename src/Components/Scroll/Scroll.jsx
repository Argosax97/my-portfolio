import React from "react";
import "./Scroll.scss";

const Scroll = () => {
  return (
    <div
      className="scroll-top"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default Scroll;