import React from "react";
import styled from "styled-components";
import TypeAnimation from "react-type-animation";
import "@fontsource/zen-kaku-gothic-antique";
const SmallHeroWrapper = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  margin: 0 auto;
  h1 {
    position: absolute;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 18%;
    text-align: center;
    color: var(--headline);
    font-family: "Zen Kaku Gothic Antique";
    font-size: 80px;
    font-style: italic;
  }
  @media (max-width: 996px) {
    h1 {
      font-size: 50px;
      top: 25%;
    }
  }
  @media (max-width: 500px) {
    height: 250px;
    h1 {
      top: 25%;
      font-size: 30px;
    }
  }
`;

export default function SimpleBanner({ title, subtitle }) {
  return (
    <div className="container">
      <SmallHeroWrapper>
        <TypeAnimation
          cursor={false}
          sequence={[title, 2000, "", 250, subtitle, 2000]}
          repeat={Infinity}
          wrapper="h1"
        />
      </SmallHeroWrapper>
    </div>
  );
}
