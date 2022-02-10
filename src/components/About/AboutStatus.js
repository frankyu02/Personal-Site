import React, { useCallback, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import "@fontsource/rowdies";
import "@fontsource/supermercado-one";
import { StatusWrapper } from "./StatusStyle";

export default function Status(){
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() =>{
        setOpen((c) => {
            return !c;
        });
    }, [setOpen]);
    const data = useStaticQuery(graphql`
        query{
            allSanityAboutPage {
                nodes {
                status
                }
            }
        }
    `)
    const stats = data.allSanityAboutPage.nodes[0].status;
    const date = new Date();
    const age = date.getFullYear() - 2002;
    console.log(age);
    return(
        <StatusWrapper open={open}>
            <div className="content">
                <h3 className="trivia">Some Trivia</h3>
                <div className="item">
                    <p className="subject">Age:</p>
                    <p className="response">{age}</p>
                </div>
                <div className="item">
                    <p className="subject">Feeling:</p>
                    <p className="response">{stats[0]}</p>
                </div>
                <div className="item">
                    <p className="subject">Current Job:</p>
                    <p className="response">{stats[1]}</p>
                </div>
                <div className="item">
                    <p className="subject">Current Project:</p>
                    <p className="response">{stats[2]}</p>
                </div>
            </div>
            <button className="toggle" onClick={handleOpen}>
                <span><FaArrowAltCircleUp /></span>
            </button>
        </StatusWrapper>
    )
}