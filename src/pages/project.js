import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Projects(){
    const data = useStaticQuery(graphql`
    
    `)
    return(
        <h1>Hey I'm the Projects page!</h1>
    )
}