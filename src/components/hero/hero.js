import React from "react";
import "./hero.css";
import Img from "gatsby-image";
import scrollDownWhite from "../../assets/scrolldown_white.png";

export default ({ featuredImages }) => {
  console.log("touch", featuredImages);

  const { imgOne, imgTwo } = featuredImages;
  return (
    <div className="hero-wrapper">
      <div className="img-wrapper">
        <div className="left-img">
          <Img fluid={imgOne.fluid} />
        </div>
        <div className="right-img">
          <Img fluid={imgTwo.fluid} />
        </div>
      </div>
      <div className="scroll-down-wrapper">
        <img src={scrollDownWhite} />
      </div>
    </div>
  );
};


