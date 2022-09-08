import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SimpleBanner from "../components/Global Components/SmallHero/simplebanner";
import ProjectSwiper from "../components/ProjectPage/ProjectSwiper/ProjectSwiper";
import SEO from "../components/SEO";

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allSanityProjectPage {
        nodes {
          projects {
            language
            name
            altText
            date(formatString: "MMMM YYYY")
            description
            image {
              asset {
                url
              }
            }
            url
          }
          subtitle
          pageTitle
          banner {
            asset {
              url
            }
          }
        }
      }
    }
  `);
  const projects = data.allSanityProjectPage.nodes[0].projects;
  const info = data.allSanityProjectPage.nodes[0];
  return (
    <div>
      <SEO title="My Projects" description="What ive been working on" />
      <SimpleBanner title={info.pageTitle} subtitle={info.subtitle} />
      <ProjectSwiper projects={projects} />
    </div>
  );
}
