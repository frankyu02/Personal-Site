import React from "react";
import styled from "styled-components";
import Img from "react-cool-img";
import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import { Slide, Zoom } from "react-awesome-reveal";
const AboutCardWrapper = styled.div`
    width: 100%;
    height: 512px;
    border: 1px solid var(--lightblue);
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    margin: 30px 0;
    .image{
        width: 50%;
        img{
                width: 100%;
                height: 100%;
        }
    }
    .content{
        width: 50%;
        h2{
            margin: 0;
            font-size: 50px;
            font-family: "anton";
            color: var(--darkblue);
            text-align: ${props => props.direction ? 'center' : 'left'};
        }
        p{
            margin: 0;
            margin-top: 2%;
            line-height: 150%;
            font-size: 25px;
            font-family: "Source Sans Pro";
            text-align: left;
        }
    }
    @media(max-width: 969px){
        height: 350px;
        .content{
            p{
                font-size: 20px;
                line-height: 100%;
                text-align: left;
            }
        }
    }
    @media(max-width: 500px){
        flex-direction: column;
        height: 70vh;
        .image{
            width: 100%;
            height: 40%;
        }
        .content{
            width: 100%;
            height: 60%;
            h2{
                text-align: center;
                font-size: 40px;
            }
            p{
                margin-left: 5%;
                margin-right: 5%;
                font-size: 18px;
            }
        }
    }
`;

export default function AboutCard({ title, text, imgurl, orientation }){
    var direction = "";
    if(orientation){
        direction ="right";
    }else{
        direction = "left";
    }
    console.log(direction);
    return(
        <div className="container">
            <AboutCardWrapper direction={orientation}>
                
                <div className="image">
                    <Slide direction={direction} style={{width: '100%'}, {height: '100%'}}>
                        <Img src={imgurl} alt={'about image'} /> 
                    </Slide>  
                </div>
               
                <div className="content">
                <Zoom>
                    <h2>{title}</h2>
                    <p>{text}</p>
                 </Zoom>
                </div>
            </AboutCardWrapper>
        </div>
    )
}