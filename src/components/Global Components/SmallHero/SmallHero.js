import React from 'react';
import Img from 'react-cool-img';
import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';
import "@fontsource/zen-kaku-gothic-antique";
const SmallHeroWrapper = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    margin: 0 auto;
    img{
            width: 100%;
            height: 100%;
            z-index: -2;
        }
    h1{
        position: absolute;
        top: 0;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 18%;
        text-align: center;
        color: ${props => props.color || 'white'};
        font-family: "Zen Kaku Gothic Antique";
        font-size: 80px;
        font-style: italic;
    }
    @media(max-width: 996px){
        h1{
            font-size: 50px;
            top: 25%;
        }
    }
    @media(max-width: 500px){
        height: 250px;
        h1{
            top: 25%;
            font-size: 30px;
        }
    }
`;

export default function SmallBanner({ title, ImgUrl, subtitle, color }){
    return(
        <div className="container">
            <SmallHeroWrapper color={color}>          
                <Img src={ImgUrl} alt="banner" />
                <TypeAnimation 
                cursor={false}
                sequence={[title , 2000, '', 250, subtitle, 2000,]}
                repeat={Infinity}
                wrapper="h1" />
            </SmallHeroWrapper>
        </div>
    )
}