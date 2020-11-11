import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import fullLogo from "../../assets/sbp_full_logo.png";
import monogram from "../../assets/sbp_monogram.png";

import facebookIcon from "../../assets/socials/facebook.svg";
import instagramIcon from "../../assets/socials/instagram.svg";
import twitterIcon from "../../assets/socials/twitter.svg";
import everybodyBlack from "../../assets/everybody_black.png";

export default ({ data }) => {
  const { twitter, facebook, instagram } = data;
  console.log(data);
  return (
    <div class="navbar">
      <NavWrapper className="header-animation">
        <ImgWrapper className="header-img-wrapper">
          <MonoLogoContainer className="mono-logo" src={monogram} />
        </ImgWrapper>
        <ImgWrapper className="header-img-wrapper">
          <TextLogoContainer className="text-logo" src={fullLogo} />
        </ImgWrapper>
        <SocialIconsContainer className="social-icons">
          <a href={instagram}>
            <SocialIcon src={instagramIcon} />
          </a>
          <a href={facebook}>
            <SocialIcon src={facebookIcon} />
          </a>
          <a href={twitter}>
            <SocialIcon src={twitterIcon} />
          </a>
        </SocialIconsContainer>
        <div class="everybody-black-wrapper">
          <img src={everybodyBlack} />
        </div>
      </NavWrapper>
    </div>
  );
};

const ImgWrapper = styled.div`
  // width: 100%;
`;

const SocialIconsContainer = styled.div`

`;

const SocialIcon = styled.img`
`;

const Navbar = styled.div`
  
`;

const NavWrapper = styled.div`
  
`;

const MonoLogoContainer = styled.img`
`;

const TextLogoContainer = styled.img`

`;

const LogoContainer = styled.img`
  height: 20px;
`;

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight: 800;
  }
`;
