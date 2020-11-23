import React from "react";
import styled from "styled-components";
import "./sidebar.css";
import Contact from "../../assets/sbp_contact.png";
import BuyBlack from "../../assets/sbp_buyblack.png";

export default ({email}) => {
  return (
    <div class="sidebar">
      <BuyBlackWrapper>
        <BuyBlackImg src={BuyBlack} />
      </BuyBlackWrapper>
      <ContactWrapper>
        <a href={`mailto:${email}`} style={{ display: "flex" }}>
          <ContactImg src={Contact} />
        </a>
      </ContactWrapper>
    </div>
  );
};

const BuyBlackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(40, 40, 40);
`;

const BuyBlackImg = styled.img`
  margin: auto;
  height: 50vh;
  width: auto;
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
