import "./styled.css";
import React from 'react';
import Header from "./src/components/header/header";
import Layout from "./src/components/Layout/Layout";

export function wrapPageElement({ element, props}){
    return <Layout {...props}>{element}</Layout>;
}