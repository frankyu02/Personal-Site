import { Link } from "gatsby";
import React, { useState } from "react";
import { SiLinkedin, SiGithub, SiDiscord } from "react-icons/si";
import "@fontsource/rowdies";
import { Media, Pages, Wrapper } from "./headerStyle";
import Hamburger from 'hamburger-react';
export default function Header(){
    const [open, setOpen] = useState(false);
    return(
        <Wrapper isOpen={open} >
            <div className="OpenBtn">
                <Hamburger toggled={open} toggle={setOpen} size={48} duration={0.1}/>
            </div>
            <Pages isOpen={open}>
                <div className= "linkHolder" ><Link to=".."> Home </Link></div>
                <div className= "linkHolder" ><Link to="#"> About Me </Link></div>
                <div className= "linkHolder" ><Link to="../project"> Projects </Link></div>
                <div className= "linkHolder" ><Link to="../test"> Other? </Link></div>
                <div className= "linkHolder" ><a 
                                                href="https://res.cloudinary.com/dnc6bhhkf/image/upload/v1644089416/Personal%20Site/Resume-pages-deleted_ytmjc4.pdf" 
                                                target="_Blank"
                                                rel="noreferrer"> Resume 
                                                </a>
                </div>
            </Pages>
            <Media>
                <a className="linkedIn" rel="noreferrer" href="https://www.linkedin.com/in/frank-yu-441213173/"target="_Blank" aria-label="save"><SiLinkedin /></a>
                <a className="Github" rel="noreferrer" href="https://github.com/frankyu02"target="_Blank" aria-label="save"><SiGithub /></a>
                <a className="Disc" rel="noreferrer" href="https://discordapp.com/users/Sinful#6115"target="_Blank" aria-label="save"><SiDiscord /></a>
            </Media>
        </Wrapper>
    )
}