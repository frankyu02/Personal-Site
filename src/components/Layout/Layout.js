import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import GlobalStyles from "../styles/GlobalStyles";

export default function Layout(props){
    return(
        <div>
            <GlobalStyles />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}