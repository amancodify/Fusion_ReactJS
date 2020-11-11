import React from 'react';
import missionImg from "../../../assets/construction2.jpg";
import constructionTeamImg from "../../../assets/cteam.jpg";



const OurStory = () => {
    return (
        <>
            <div className="our-story-main" >
                <div className="pointer" id="our-story"></div>
                <div className="container sub-main">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">OUR STORY</div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5 left">
                            <div className="title-text">Our Mission</div>
                            <div className="desc">To be honest in all our activities, dealing and to consciously introspect our work and action on day to day basis. We are Company that would consciously like to channel its resources, energy and activities towards building a word that is free of low standards. We will question every action of ours of minute bases and see to it that we continuously take on bigger challenges and we must grow and progress daily in everything that we perform. We must progress as individuals as a company and as a truly meaningful organization that is honest , fair in all its dealings.</div>
                        </div>
                        <div className="col-md-5 right">
                            <img src={missionImg} alt="" />
                        </div>
                    </div>
                    <div className="row justify-content-center what-we-do">
                        <div className="col-md-5 right wwr-t">
                            <img src={constructionTeamImg} alt="" />
                        </div>
                        <div className="col-md-5 left wwr-d">
                            <div className="title-text">Who we are?</div>
                            <div className="desc">Established in the year 2015 Delhi India, we ‘’FUSION ENGITECH PVT.LTD.’’ are engaged in providing various kind of Training & Civil construction service that include is now a well-known company providing quality construction within stipulated time frame, thus, gaining a competitive edge in the construction work , Roads & Industrial Roads. These are offered as per the requirement of our esteemed clients. The business is driven by our 2 working director collectively they accumulated more than 4 years of work experience in the civil & trading industry. They are involved in the business development procurement projects management and administration of the company.</div>
                        </div>
                    </div>
                </div>
                <div className="platform-main">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3 open-card">
                                <div className="oc-title">Our Platform</div>
                                <div className="oc-desc">The HubSpot growth platform lets your entire company to work together — from marketing, to sales, to customer service. Each Hub is powerful alone, but better together.</div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/home/2020/CRM.svg" alt="" />
                                    <span>HubSpot CRM</span>
                                </div>
                                <div className="p-desc">
                                    Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software.
                                </div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/home/2020/CRM.svg" alt="" />
                                    <span>HubSpot CRM</span>
                                </div>
                                <div className="p-desc">
                                    Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software.
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/home/2020/CRM.svg" alt="" />
                                    <span>HubSpot CRM</span>
                                </div>
                                <div className="p-desc">
                                    Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software.
                                </div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/home/2020/CRM.svg" alt="" />
                                    <span>HubSpot CRM</span>
                                </div>
                                <div className="p-desc">
                                    Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software.
                                </div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/home/2020/CRM.svg" alt="" />
                                    <span>HubSpot CRM</span>
                                </div>
                                <div className="p-desc">
                                    Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software.
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="extra-feature">
                                <div className="img-container">
                                    <img alt="" src="http://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/home/2018/Integrations_Illustration@2x.png" className="rubic-cube-img" />
                                </div>
                                <div className="desc-container">
                                    <div className="p-title">
                                        <span>Integrations and Extensions</span>
                                    </div>
                                    <div className="p-desc">
                                        Our CRM is free, because we believe your entire organization should be able to have a unified view of your customers. It’s the underlying database that powers each HubSpot product, and is the heart and soul of the software.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory;