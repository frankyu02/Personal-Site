import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import AboutCard from "../components/About/AboutCard"

export default function A(){
    const data = useStaticQuery(graphql`
        query{
            allSanityAboutPage {
                nodes {
                image1 {
                    asset {
                    url
                    }
                }
                banner {
                    asset {
                    url
                    }
                }
                image3 {
                    asset {
                    url
                    }
                }
                image2 {
                    asset {
                    url
                    }
                }
                pageTitle
                paragraph1
                paragraph2
                paragraph3
                subtitle
                title1
                title2
                title3
                status
                }
            }
        }
    `)
    console.log(data);
    return(
        <>
            <AboutCard />
        </>
    )
}