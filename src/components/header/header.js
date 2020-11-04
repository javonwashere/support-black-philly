import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import styles from "./header.module.css";
import fullLogo from "../../assets/sbp_full_logo.png";
import monogram from "../../assets/sbp_monogram.png";

import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import twitter from "../../assets/socials/twitter.svg";
import everybodyBlack from "../../assets/everybody_black.png"

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

export default () => (
  <Navbar>
    <NavWrapper>
      <MonoLogoContainer src={monogram} />
      <TextLogoContainer src={fullLogo} />
      <SocialIconsContainer>
        <a href="/">
          <SocialIcon src={instagram} />
        </a>
        <a href="/">
          <SocialIcon src={facebook} />
        </a>
        <a href="/">
          <SocialIcon src={twitter} />
        </a>
      </SocialIconsContainer>
      <div class="everybody-black-wrapper">
      <img src={everybodyBlack} />
    </div>
    </NavWrapper>
  </Navbar>
);

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.img`
  height: 20px;
  width: auto;
  padding-left: 0.5vw;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  align-items: center;
  display: flex;
  width: 100%;
  height: 20vh;
  background-color: rgba(197, 164, 143, 1);
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
  position: relative;
`;

const MonoLogoContainer = styled.img`
  height: 50%;
  width: auto;
`;

const TextLogoContainer = styled.img`
  height: 80%;
  width: auto;
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