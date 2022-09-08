import React from "react";
import styled from "styled-components";
import HomeHero from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import SEO from "../components/SEO";

const Wrapper = styled.div`
  position: fixed;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
`;
export default function home() {
  return (
    <div>
      <SEO
        title="Frank Yu - Personal Web Page"
        description="The Official Website of Frank Yu. Computer Science student @ UWaterloo!"
      />
      <Wrapper />
      <HomeHero />
      <Welcome />
    </div>
  );
}
