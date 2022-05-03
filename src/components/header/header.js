import { Link } from "gatsby";
import React, { useCallback, useState } from "react";
import { SiLinkedin, SiGithub, SiDiscord } from "react-icons/si";
import "@fontsource/rowdies";
import { Media, Pages, Wrapper } from "./headerStyle";
import Hamburger from 'hamburger-react';
import pdf from './resume.pdf'
export default function Header(){
    const [open, setOpen] = useState(false);
    const closePage = useCallback(() => {
        setOpen((c) => {
            return !c;
        });
    }, [setOpen]);
    return(
        <Wrapper isOpen={open} >
            <div className="OpenBtn">
                <Hamburger toggled={open} toggle={setOpen} size={48} duration={0.1}/>
            </div>
            <Pages isOpen={open}>
                <div className= "linkHolder" ><Link to=".." onClick={closePage}> Home </Link></div>
                <div className= "linkHolder" ><Link to="../about " onClick={closePage}> About Me </Link></div>
                <div className= "linkHolder" ><Link to="../project" onClick={closePage}> Projects </Link></div>
                <div className= "linkHolder" ><Link to="../misc" onClick={closePage}> Dinner Plans </Link></div>
                <div className= "linkHolder" ><a onClick={()=>{
                    closePage();
                    window.open(pdf, '_blank');
                }}> 
                                                Résumé 
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