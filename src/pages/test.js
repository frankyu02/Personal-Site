import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import SmallBanner from "../components/Global Components/SmallHero/SmallHero";
import HomeHero from "../components/Home/Hero";
import ProjectSwiper from "../components/ProjectPage/ProjectSwiper/ProjectSwiper";

export default function A(){
    return(
        <>
        <HomeHero />
        </>
    )
}