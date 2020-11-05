import React from "react";
import styled from "styled-components";
// import "./sidebar.css";
import Contact from "../../assets/sbp_contact.png";
import BuyBlack from "../../assets/sbp_buyblack_horizontal.png";

export default () => {
  return (
      <BuyBlackWrapper style={{height: "20vh"}}>
        <BuyBlackImg src={BuyBlack} />
      </BuyBlackWrapper>
  );
};

const BuyBlackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(40, 40, 40);
  padding: 0 5vw;
`;

const BuyBlackImg = styled.img`
  margin: auto;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-area: contact;
  background-color: rgb(199, 233, 250);
`;

const ContactImg = styled.img`
  margin: auto;
  display: block;
`;
