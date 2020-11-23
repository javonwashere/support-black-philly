import React from "react";
import "./mission-statement.css";
import Asterisk from "../../assets/sbp_asterisk.png"
import DownCaret from "../down-caret/down-caret";

export default ({data}) => {
  return (
    <div class="mission-statement-wrapper" style={{position: "relative"}}>
      <div class="header-wrapper">
        <h1 style={{margin: "2vh 0" }}>{data[0].title}</h1>
        <img src={Asterisk} />
      </div>
      <p>
        {data[0].content.content}
      </p>
      <DownCaret />
    </div>
  );
};
