import React from "react";
import HomeHero from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import SEO from "../components/SEO";

export default function home(){
  return(
    <div>
      <SEO title="Homepage" description="The Official Website of Frank Yu. Computer Science student @ UWaterloo!"/>
      <HomeHero />
      <Welcome />
    </div>
  )
}