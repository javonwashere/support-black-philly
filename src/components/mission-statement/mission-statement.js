import React from "react";
import "./mission-statement.css";
import Asterisk from "../../assets/sbp_asterisk.png"

export default ({data}) => {
  console.log(data, "HERE WE GO")
  return (
    <div class="mission-statement-wrapper">
      <div class="header-wrapper">
        <h1>{data[0].title}</h1>
        <img src={Asterisk} />
      </div>
      <p>
        {data[0].content.content}
      </p>
    </div>
  );
};
