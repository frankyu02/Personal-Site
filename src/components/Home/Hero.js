import React, { useState } from 'react';
import Img from 'react-cool-img';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube, Autoplay } from "swiper";
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import TextTransition, { presets } from "react-text-transition";
import "@fontsource/supermercado-one";
const HeroWrapper = styled.div`
    width: 100%;
    height: 512px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    flex-direction :column;
    justify-content: center;
    background: linear-gradient(22deg, rgba(23,123,145,1) 0%, rgba(28,148,173,1) 16%, rgba(32,175,205,1) 26%, rgba(15,191,228,1) 34%, rgba(115,224,238,0.9612219887955182) 43%, rgba(237,253,255,1) 60%);
    h1{
        font-family: "Supermercado One";
        font-weight: bolder;
        font-size: 70px;
    }
    h2{
        width: 100%;
        text-align: center;
    }
`;
export default function HomeHero(){
    const data = useStaticQuery(graphql`
    query{
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
    `)
    const images = data.allSanityHomePage.nodes[0].HomepageImages;
    const text = data.allSanityHomePage.nodes[0].HomepageHeroText;
    const [index, setIndex] = useState(0);

    React.useEffect(() => {
        const intervalID = setInterval(() =>
            setIndex(index => index + 1), 1100);
            return() => clearTimeout(intervalID);
    }, []);
    
    return(
            <HeroWrapper>
                <h1>
                    Frank Yu
                </h1>
                <h2>
                    <TextTransition
                        text={text[index % text.length]}
                        springConfig={presets.gentle}
                        className="headertext"
                        delay={500} 
                        inline />
                </h2>
            </HeroWrapper>
        
    )
}