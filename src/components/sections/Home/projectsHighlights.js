import React from 'react';
import p1Banner from "../../../assets/sample.png";
const PROJECTS = [
    {
        "bannerImg": p1Banner,
        "mainTitle": "Indian Railways Track",
        "description": "Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software."
    },
    {
        "bannerImg": p1Banner,
        "mainTitle": "Indian Railways Track",
        "description": "Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software."
    },
    {
        "bannerImg": p1Banner,
        "mainTitle": "Indian Railways Track",
        "description": "Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software."
    },
    {
        "bannerImg": p1Banner,
        "mainTitle": "Indian Railways Track",
        "description": "Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software."
    },
    {
        "bannerImg": p1Banner,
        "mainTitle": "Indian Railways Track",
        "description": "Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software."
    },
    {
        "bannerImg": p1Banner,
        "mainTitle": "Indian Railways Track",
        "description": "Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software."
    },
    {
        "bannerImg": p1Banner,
        "mainTitle": "Indian Railways Track",
        "description": "Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software."
    }
];

const ProjectsHighlights = () => {
    
    return (
        <>
            <div className=" p-highlights-main">
                <div className="main-title">RUNNING <span>PROJECTS</span></div>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {PROJECTS.map((item, inx) => {
                        return (
                            <div className="project-main" key={`running_projects_${inx}`}>
                                <img src={item.bannerImg} alt="" className="banner-img" />
                                <div className="title">{item.mainTitle}</div>
                                <div className="desc">{item.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProjectsHighlights;