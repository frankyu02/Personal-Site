import React from 'react';
import Img from 'react-cool-img';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube, Autoplay } from "swiper";
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';
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
        margin: 0;
        top: 35%;
        margin-left: auto;
        margin-right: 15%;
        left: 0;
        right: 0;
        text-align: right;
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
            margin-left: 0;
            height: 100px;
            width: 100px;
        }
        h1{
            font-size: 30px;
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
            }
        }
    }   
`)
const images = data.allSanityHomePage.nodes[0].HomepageImages;
let headertxt = ['Frank Yu', 500,
                'Developer', 500,
                'Programmer', 500,
                'Innovator', 500,
                'Learner', 500,
                'Christian', 500,
                'Not a Christian', 500,
                'Software Engineer', 500,
                'App Creator', 500,
                'Asian-american', 500,
                '(because it matters)', 500,
                'enlightened being', 1500,
                ]
    return(
        
            <HeroWrapper>
                <Swiper
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
                        delay: 750,
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
                <TypeAnimation 
                cursor={false}
                sequence={headertxt}
                repeat={Infinity}
                wrapper="h1" />
            </HeroWrapper>
        
    )
}