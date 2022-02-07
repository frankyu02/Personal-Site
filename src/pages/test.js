import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import SmallBanner from "../components/Global Components/SmallHero/SmallHero";
import ProjectSwiper from "../components/ProjectPage/ProjectSwiper/ProjectSwiper";

export default function A(){
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
    const info = data.allSanityProjectPage.nodes[0];
    return(
        <>
        <SmallBanner title={info.pageTitle} ImgUrl={info.banner.asset.url} subtitle={info.subtitle} />
        </>
    )
}