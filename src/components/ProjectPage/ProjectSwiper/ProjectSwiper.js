import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import ProjectCard from "../../Templates/ProjectCard";

SwiperCore.use([Navigation, Pagination]);

const SwiperContainer = styled.div`
    position: relative;
    overflow: visible;
    margin-top: 80px;
    @media (max-width: 969px){
        .swiper-button-next{
            visibility: hidden;
        }
        .swiper-button-prev{
            visibility: hidden;
        }
    }
`;

export default function ProjectSwiper({ projects }){
    console.log(projects);
    return(
        <SwiperContainer>
            <Swiper 
                className="ProjectSwiper"
                slidesPerView={1}
                navigation={true}
                pagination={{
                    dynamicBullets: true,
                }}
                breakpoints={{
                    "992":{
                        "slidesPerView": 1.5,
                    }
                }}
                >
                    {
                        projects?.length > 0 ? 
                        (projects.map((project, index) => {
                            return(
                                <SwiperSlide
                                    key={index}
                                    virtualIndex={index}>
                                        <ProjectCard project={project} />
                                    </SwiperSlide>
                            )
                        })) :
                        <div>loading projects...</div>
                    }
                </Swiper>
        </SwiperContainer>
    )
}