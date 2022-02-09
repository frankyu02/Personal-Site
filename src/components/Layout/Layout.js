import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import HomeHero from "../Home/Hero";
import GlobalStyles from "../styles/GlobalStyles";

export default function Layout(props){
    return(
        <>
            <GlobalStyles />
            <Header />
            {props.children}
            <Footer />
        </>
    )
}