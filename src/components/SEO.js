import React from "react";
import Helmet from "react-helmet";
export default function SEO({ description, title }){
    return(
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
        </Helmet>
    )
}