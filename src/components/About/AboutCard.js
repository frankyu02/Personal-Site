import React from "react";
import styled from "styled-components";
import Img from "react-cool-img";
const AboutCardWrapper = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid black;
`;

export default function AboutCard(){
    return(
        <div className="container">
            <AboutCardWrapper>
                <div className="image"></div>
            </AboutCardWrapper>
        </div>
    )
}