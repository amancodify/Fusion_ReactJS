import React from 'react';
import { getServiceData } from "./serviceData";
import { useParams } from "react-router-dom";
import serviceBanner from "../../../assets/service-banner.gif";
import houseBanner from "../../../assets/house-banner.png";

const Services = () => {
    let { id } = useParams();
    let serviceData = getServiceData(id);
    return (
        <>
            {serviceData &&
                <div className="services-main">
                    <div className="services-header row">
                        <div className="banner col-md-5"><img src={serviceBanner} alt="" /></div>
                        <div className="service-title col-md-7">SERVICES <br /> <span>{serviceData.title}</span> </div>
                    </div>
                    <div className="banner-bar">{serviceData.title.toUpperCase()} AT FUSION</div>
                    <div className="s-details">
                        <div className="by-the-numbers">
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="title col-md-3 my-4">By the Numbers</div>
                                    <div className="col-md-3 my-4">
                                        <div className="sub-title">Trusted By</div>
                                        <div className="title">{serviceData.trustedBy}</div>
                                        <div className="sub-title">Valuable Customers</div>
                                    </div>
                                    <div className="col-md-3 my-4">
                                        <div className="sub-title">Accepted in over</div>
                                        <div className="title">{serviceData.acceptedInOver}</div>
                                        <div className="sub-title">Cities</div>
                                    </div>
                                    <div className="col-md-3 my-4">
                                        <div className="sub-title">Running</div>
                                        <div className="title">{serviceData.runningProjects}</div>
                                        <div className="sub-title">Current Projects</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="description">
                                        {serviceData.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={houseBanner} alt="" />
                    </div>
                    <div className="aminities">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <img className="vector" src={serviceData.vectorImage} alt="" />
                                </div>
                                <div className="col-md-6 pill-container">
                                    <div className="title">{serviceData.aminitiesTitle}</div>
                                    {serviceData.aminities.length > 0 && serviceData.aminities.map((item, inx) => {
                                        return (
                                            <>
                                                <div className="pill" key={`service_${serviceData.title}_${inx}`}>{item}</div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="row cta-main">
                                    <a href="https://form.jotform.com/210302493490448" target="blank" className="cta-btn">{serviceData.buttonText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Services;