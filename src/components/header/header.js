import { Link } from "gatsby";
import React, { useCallback, useState } from "react";
import { SiLinkedin, SiGithub, SiDiscord } from "react-icons/si";
import { FaExpandAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "@fontsource/rowdies";
import { Media, Pages, Wrapper } from "./headerStyle";

export default function Header(){
    const [open, setOpen] = useState(false);
    const Open = useCallback(() => {
        setOpen((c) => {
            return !c;
        });
    }, [setOpen]);
    return(
        <Wrapper isOpen={open} >
            <div className="OpenBtn">
                <button onClick={Open} aria-label="save"><FaExpandAlt /></button>
            </div>
            <div className="CloseBtn">
                <button onClick={Open} aria-label="save"><AiOutlineClose /></button>
            </div>
            <Pages isOpen={open}>
                <div className= "linkHolder" ><Link to="#"> Home </Link></div>
                <div className= "linkHolder" ><Link to="#"> About Me </Link></div>
                <div className= "linkHolder" ><Link to="#"> Projects </Link></div>
                <div className= "linkHolder" ><Link to="#"> Other? </Link></div>
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