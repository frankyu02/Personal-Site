import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Projects(){
    const data = useStaticQuery(graphql`
        query{
            allSanityProject {
                nodes {
                    language
                    name
                    url
                    date(formatString: "MMMM-YYYY")
                    image {
                        asset {
                            url
                        }
                    }
                }
            }
        }
    `)
    const projects = data.allSanityProject.nodes;
    return(
        <h1>Hey I'm the Projects page!</h1>
    )
}