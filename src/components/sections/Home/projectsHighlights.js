import React from 'react';
import p1Banner from "../../../assets/p1.jpg";
import p4Banner from "../../../assets/p4.jpg";
import p5Banner from "../../../assets/p5.jpg";
import p9Banner from "../../../assets/p9.jpg";
import p10Banner from "../../../assets/p10.jpg";
import p11Banner from "../../../assets/p11.jpg";
import p12Banner from "../../../assets/p12.jpg";

const PROJECTS = [
    {
        "bannerImg": p1Banner,
        "mainTitle": "L&T Pvt. Ltd.",
        "location": "Udaipur, Rajasthan",
        "description": "Building work at the prime location of rajasthan - Udaipur, L&T addresses critical needs in key sectors - Hydrocarbon, Infrastructure, Power, Process Industries and Defense - for customers in over 30 countries around the world."
    },
    {
        "bannerImg": p9Banner,
        "mainTitle": "TATA Projects Limited",
        "location": "Gurgaon",
        "description": "Building work at Gurgaon from TATA Projects limited, Tata Projects is proficient in mega infrastructure projects such as commercial and office buildings, hospitals, hotels, data centers and airports."
    },
    {
        "bannerImg": p11Banner,
        "mainTitle": "L&T Pvt. Ltd.",
        "location": "Ajmer/Binmaliya, Rajasthan",
        "description": "Turfing work from L&T - WDFC Project 5 Ajmer to binmaliya, Rajsthan. L&T addresses critical needs in key sectors - Hydrocarbon, Infrastructure, Power, Process Industries and Defense - for customers in over 30 countries around the world."
    },
    {
        "bannerImg": p4Banner,
        "mainTitle": "Oriental Structure",
        "location": "Ghazipur",
        "description": "Turfing work from Oriental Structure is one of the prime projects of Fusion, working with such intresting projects is a most welcomed in our group."
    },
    {
        "bannerImg": p10Banner,
        "mainTitle": "L&T Pvt. Ltd.",
        "location": "Gurgaon sector 54",
        "description": "Building work at Gurgaon sector 54. L&T addresses critical needs in key sectors - Hydrocarbon, Infrastructure, Power, Process Industries and Defense - for customers in over 30 countries around the world."
    },
    {
        "bannerImg": p5Banner,
        "mainTitle": "L&T Pvt. Ltd.",
        "location": "Dawarka sector 25, New Delhi",
        "description": "L&T  building work at dawarka sector 25. L&T addresses critical needs in key sectors - Hydrocarbon, Infrastructure, Power, Process Industries and Defense - for customers in over 30 countries around the world."
    },
    {
        "bannerImg": p12Banner,
        "mainTitle": "TATA Projects Limited",
        "location": "Faridabad",
        "description": "Ama Hospital Faridabad. Tata Projects is proficient in mega infrastructure projects such as commercial and office buildings, hospitals, hotels, data centers and airports."
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
                                <div className="location"><i className="fa fa-map-marker mr-1" aria-hidden="true"></i>{item.location}</div>
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