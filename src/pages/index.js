import React from "react";
import HomeHero from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import Background from "../components/styles/background";

export default function home(){
  return(
    <>
      <Background />
      <HomeHero />
      <Welcome />
    </>
  )
}