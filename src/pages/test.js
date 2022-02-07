import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import ProjectCard from "../components/Templates/ProjectCard"

export default function A(){
    const data = useStaticQuery(graphql`
        query{
            allSanityProject {
                nodes {
                    language
                    name
                    url
                    date(formatString: "MMMM YYYY")
                    image {
                        asset {
                            url
                        }
                    }
                    altText
                    description
                }
            }
        }
    `)
    const projects = data.allSanityProject.nodes;
    return(
        <>
        <ProjectCard project = {projects[0]} />
        </>
    )
}