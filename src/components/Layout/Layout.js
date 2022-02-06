import React from "react";
import Header from "../header/header";
import GlobalStyles from "../styles/GlobalStyles";
export default function Layout(props){
    return(
        <>
        <GlobalStyles />
        <Header />
        {props.children}
        </>
    )
}