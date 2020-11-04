import React from "react";
import "./sidebar.css";

export default () => {
  let buyBlack = "buy black";
  buyBlack = "";
  return (
    <div class="sidebar">
      <div class="buy-black">{buyBlack.toUpperCase()}</div>
      <div class="contact"></div>
    </div>
  );
};
