import React from "react";
import {  SiGithub } from "react-icons/si";
import Img from "react-cool-img";
import "@fontsource/anton";
import "@fontsource/inter";
import "@fontsource/source-sans-pro";
import { Wrapper } from "./ProjectCardStyle";

export default function ProjectCard({ project }){
    let languages = project.language.join(', ');
    return(
        <Wrapper>
            <div className="left" >
                    <Img 
                        src={project.image.asset.url}
                        alt={project.altText}
                    />
                <div className="languages">
                    <h2>Languages Used: </h2>
                    <p>{languages}</p>
                </div>
            </div>
            <div className="right">
                <p className="date">{project.date}</p>
                <h2>{project.name}</h2>
                <p className= "description">{project.description}</p>
            </div>
            {project.url &&
            <a className="github" aria-label="Github Link" href={project.url} target="_blank" rel="noreferrer"><SiGithub /></a>}
        </Wrapper>
    )
}