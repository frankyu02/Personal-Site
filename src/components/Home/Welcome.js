import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import "@fontsource/anton";
import "@fontsource/inter";
import "@fontsource/rowdies";
import TypeAnimation from 'react-type-animation';
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    h2{
        font-family: "Anton";
        color: #0c8496;
        font-size: 60px;
        font-style: italic;
    }
    p{
        width: 50%;
        text-align: center;
        font-family: 'Inter';
        margin-left: 25%;
        font-size: 30px;
    }
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 50px;
        border: 1px solid var(--blue);
        border-radius: 10px;
        text-decoration: none;
        background: white;
        font-family: "Rowdies";
        &:visited{
            color: var(--blue);
        }
        &:hover{
            font-style: italic;
            color: var(--green);
            background: var(--blue);
            transition: 0.2s;
        }
    }
    @media (max-width: 969px){
        margin: 0 5px;
        width: calc(100% - 10px);
        h2{
            text-align: center;
            font-size: 35px;
        }
        p{
            width: 100%;
            margin: 0;
            text-align: center;
            font-size: 20px;
            margin-bottom: 1em;
        }
    }
`;

export default function Welcome(){
    const data = useStaticQuery(graphql`
        query{
            allSanityHomePage {
                nodes {
                    welcomeText
                    welcomeTitle
                }
            }
        }
    `)
    const info = data.allSanityHomePage.nodes[0];
    return(
        <div className="container">
            <Wrapper >
                <Slide cascade>
                    <h2>{info.welcomeTitle}</h2>
                    <p>{info.welcomeText}</p>
                </Slide>
                <Fade>
                    <Link to="../about">
                        <TypeAnimation 
                            cursor={true}
                            sequence={['Read More...' , 2000, '', 250]}
                            repeat={Infinity}
                            wrapper="a" />
                    </Link>
                </Fade>
            </Wrapper>
        </div>
    )
}