import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import GlobalStyles from "../styles/GlobalStyles";

const LayoutStyled = styled.div`
    background: #EDFDFF;
    position: fixed;
    z-index: -2;
    width: 100vw;
    height: 100vh;
`;
export default function Layout(props){
    return(
        <>
        <LayoutStyled />
        <GlobalStyles />
        <Header />
        {props.children}
        <Footer />
        </>
    )
}