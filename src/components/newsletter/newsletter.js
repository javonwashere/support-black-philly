import React from "react";
import "./newsletter.css";
import fist from "../../assets/sbp_fist.png";

export default () => {
  return (
    <div class="newsletter-wrapper">
      <div class="header-wrapper">
        <div>
          <h1>Being Down for</h1>
          <h1>the Movement</h1>
        </div>
        <div className="fist-wrapper">
          <img src={fist} />
        </div>
      </div>
      <p>
        Buying Black today, & everyday for decades to come. We see Support Black
        Philly as a lifestyle, and if you are visiting this page we believe that
        you want to embrace that lifestyle too. Get to know the faces behind the
        businesses you are supporting by engaging on social (Instagram, twitter,
        face-book) and stay up to date as we grow. Philadelphia is here to be at
        the forefront of this movement.
      </p>
      <small>SWITCH YOUR LIFESTYLE</small>
    </div>
  );
};
