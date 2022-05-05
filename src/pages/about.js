import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SmallBanner from "../components/Global Components/SmallHero/SmallHero";
import AboutCard from "../components/About/AboutCard";
import Status from "../components/About/AboutStatus";
import SEO from "../components/SEO";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 100px;
`
export default function About(){
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
                }
            }
        }
    `)
    const info = data.allSanityAboutPage.nodes[0]
    return(
        <div>
            <Wrapper>
            <SEO title="About Me" description='Just a little about me'/>
            <SmallBanner title={info.pageTitle} ImgUrl={info.banner.asset.url} subtitle={info.subtitle} color={'black'}/>
            <AboutCard 
                title={info.title1}
                text={info.paragraph1}
                imgurl={info.image1.asset.url}
            />
            <AboutCard 
                title={info.title2}
                text={info.paragraph2}
                imgurl={info.image2.asset.url}
                orientation={'row-reverse'}
            />
            <AboutCard 
                title={info.title3}
                text={info.paragraph3}
                imgurl={info.image3.asset.url}
            />
            <Status />
            </Wrapper>
        </div>
    )
}