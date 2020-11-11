import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import styles from "./header.module.css";
import fullLogo from "../../assets/sbp_full_logo.png";
import monogram from "../../assets/sbp_monogram.png";

import facebookIcon from "../../assets/socials/facebook.svg";
import instagramIcon from "../../assets/socials/instagram.svg";
import twitterIcon from "../../assets/socials/twitter.svg";
import everybodyBlack from "../../assets/everybody_black.png";

// export default () => (
//   <nav role="navigation">
//     <ul className={styles.navigation}>
//       <li className={styles.navigationItem}>
//         <Link to="/">Home</Link>
//       </li>
//       <li className={styles.navigationItem}>
//         <Link to="/blog/">Blog</Link>
//       </li>
//     </ul>
//   </nav>
// )

export default ({ data }) => {
  const { twitter, facebook, instagram } = data;
  console.log(data);
  return (
    <Navbar className="navbar">
      <NavWrapper className="header-animation">
        <ImgWrapper>
          <MonoLogoContainer src={monogram} />
        </ImgWrapper>
        <ImgWrapper>
          <TextLogoContainer src={fullLogo} />
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
    </Navbar>
  );
};

const ImgWrapper = styled.div`
  width: 100%;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;

const SocialIcon = styled.img`
  height: 1px;
  height: 20px;
  width: 10px;
  width: auto !important;
  max-width: 10vw !important;
  padding-left: 1vw;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  align-items: center;
  display: flex;
  width: 100%;
  height: 20vh;
  background-color: rgba(251, 248, 234, 1);
  //   padding: 3vh 2vw;
`;

const NavWrapper = styled.div`
  display: flex;
  max-width: 1180px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // position: relative;
`;

const MonoLogoContainer = styled.img`
  height: 1px;
  height: 10vw;
  max-height: 10vh;
  width: auto !important;
  max-width: 10vw !important;
`;

const TextLogoContainer = styled.img`
  height: 1px;
  height: 18vw;
  max-height: 18vh;
  width: auto !important;
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
