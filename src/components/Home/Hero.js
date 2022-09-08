import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import TextTransition, { presets } from "react-text-transition";
import "@fontsource/supermercado-one";
const HeroWrapper = styled.div`
  width: 100%;
  height: 512px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--background);
  border-bottom: 1px solid var(--paragraph);
  h1 {
    font-family: "Supermercado One";
    font-size: 70px;
    color: var(--headline);
  }
  h2 {
    width: 100%;
    text-align: center;
    color: var(--paragraph);
  }
`;
export default function HomeHero() {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage {
        nodes {
          HomepageImages {
            asset {
              url
            }
          }
          HomepageHeroText
        }
      }
    }
  `);
  const images = data.allSanityHomePage.nodes[0].HomepageImages;
  const text = data.allSanityHomePage.nodes[0].HomepageHeroText;
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalID = setInterval(() => setIndex((index) => index + 1), 1100);
    return () => clearTimeout(intervalID);
  }, []);

  return (
    <HeroWrapper>
      <h1>Frank Yu</h1>
      <h2>
        <TextTransition
          text={text[index % text.length]}
          springConfig={presets.gentle}
          className="headertext"
          delay={500}
          inline
        />
      </h2>
    </HeroWrapper>
  );
}
