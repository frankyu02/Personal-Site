import React from "react"
import "@fontsource/rowdies";
import styled from "styled-components";
import Quantity from "../components/Misc/Quantity";
import SEO from "../components/SEO";
const Wrapper = styled.div`
    width: 100%;
    h2{
        font-size: 60px;
        font-family: 'Rowdies';
    }
    p{
        line-height: 200%;
    }
    @media(max-width: 500px){
        width: calc(100% - 10px);
        margin-left: 5px;
        margin-right: 5px;
    }
`;
export default function A(){
    return(
        <>
            <SEO title="Unknown" description="I wonder what this page will be"/>
            <div className="container">
                <Wrapper>
                    <h2>Welcome to... uh</h2>
                    <p>honestly I have no clue what this page is for. I just thought design wise having 5 options in the header looks much better than 4.<br />
                        Maybe I'll start blogging and turn this page into one that displays those blog posts but uh... <br />
                        for now I present to you a counter so you can have some fun here i guess...
                    </p>
                    <Quantity />
                </Wrapper>
            </div>
        </>
    )
}