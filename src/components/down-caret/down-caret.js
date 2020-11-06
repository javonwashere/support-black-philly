import React from "react";
import "./down-caret.css";
import scrollDownCaret from "../../assets/scrolldown_brown.png";

export default () => {
  return (
    <div className="scroll-caret-please">
      <img src={scrollDownCaret} />
    </div>
  );
};
