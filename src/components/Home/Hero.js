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
    position: relative;
    background: linear-gradient(22deg, rgba(23,123,145,1) 0%, rgba(28,148,173,1) 16%, rgba(32,175,205,1) 26%, rgba(15,191,228,1) 34%, rgba(115,224,238,0.9612219887955182) 43%, rgba(237,253,255,1) 60%);
    img{
        margin-left: 10%;
        width: 512px;
        height: 512px;
    }
    h1{
        position: absolute;
        width: 45%;
        margin: 0;
        padding: 0;
        display: block;
        top: 35%;
        right: 0;
        font-family: "Supermercado One";
        font-weight: bolder;
        font-size: 70px;
    }
    @media(max-width: 996px){
        img{
            margin-top: 10%;
            height: 300px;
            width: 300px;
        }
        h1{
            font-size: 30px;
        }
    }
    @media(max-width: 500px){
        height: 250px;
        img{
            margin-top: 15%;
            margin-left: 5px;
            height: 100px;
            width: 100px;
        }
        h1{
            width: auto;
            margin-right: 5%;
            font-size: 20px;
        }
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
                {/* <Swiper
                    loop={true}
                    effect={"cube"}
                    grabCursor={false}
                    centeredSlides={true}
                    cubeEffect={{
                        shadow: false,
                        slideShadows: false,
                        shadowOffset: 20,
                        shadowScale: 0.2,
                    }}
                    autoplay={{
                        delay: 800,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCube, Autoplay]}
                    className="homepage swiper"
                >
                    {images.map((image, index) => {
                        return(
                            <SwiperSlide
                                key={index}
                                virtualIndex={index}>
                                    <Img src = {image.asset.url} alt={'image'} />
                                </SwiperSlide>
                        )
                    })}
                </Swiper>
                <h1>
                    <TextTransition
                        text={text[index % text.length]}
                        springConfig={presets.gentle}
                        className="headertext"
                        delay={500} 
                        inline />
                </h1> */}
            </HeroWrapper>
        
    )
}