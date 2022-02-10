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
    const info = data.allSanityAboutPage.nodes[0]
    return(
        <>
            <AboutCard 
            title={info.title1}
            text={info.paragraph1}
            imgurl={info.image1.asset.url}
            />
        </>
    )
}