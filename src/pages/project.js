import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProjectSwiper from "../components/ProjectPage/ProjectSwiper/ProjectSwiper";

export default function Projects(){
    const data = useStaticQuery(graphql`
        query{
            allSanityProjectPage {
                nodes {
                    projects {
                        language
                        name
                        altText
                        date(formatString: "MMMM YYYY")
                        description
                        image {
                            asset {
                                url
                            }
                        }
                        url
                    }
                    subtitle
                    pageTitle
                    banner {
                        asset {
                        url
                        }
                    }
                }
            }
        }
    `)
    const projects = data.allSanityProjectPage.nodes[0].projects;
    return(
        <ProjectSwiper projects={projects} />
    )
}