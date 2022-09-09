import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import "@fontsource/anton";
import "@fontsource/inter";
import "@fontsource/rowdies";
import TypeAnimation from "react-type-animation";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  h2 {
    font-family: "Anton";
    color: var(--headline);
    font-size: 60px;
    font-style: italic;
  }
  p {
    width: 50%;
    text-align: center;
    font-family: "Inter";
    margin-left: 25%;
    font-size: 30px;
    color: var(--paragraph);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    border-radius: 10px;
    text-decoration: none;
    background: var(--button);
    font-family: "Rowdies";
    color: var(--button-Text);
    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
    }
  }
  @media (max-width: 969px) {
    margin: 0 5px;
    width: calc(100% - 10px);
    h2 {
      text-align: center;
      font-size: 35px;
    }
    p {
      width: 100%;
      margin: 0;
      text-align: center;
      font-size: 20px;
      margin-bottom: 1em;
    }
  }
`;

export default function Welcome() {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage {
        nodes {
          welcomeText
          welcomeTitle
        }
      }
    }
  `);
  const info = data.allSanityHomePage.nodes[0];
  return (
    <div className="container">
      <Wrapper>
        <Fade cascade triggerOnce>
          <h2>{info.welcomeTitle}</h2>
          <p>{info.welcomeText}</p>
        </Fade>
        <Fade triggerOnce>
          <Link to="/about">Read More...</Link>
        </Fade>
      </Wrapper>
    </div>
  );
}
