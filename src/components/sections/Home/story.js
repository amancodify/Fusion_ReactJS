import React from 'react';
import missionImg from "../../../assets/construction2.jpg";
import constructionTeamImg from "../../../assets/cteam.jpg";
import keyValIcon from "../../../assets/keyvalue.svg";

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
                                <div className="oc-title">Our key Values</div>
                                <div className="oc-desc">We at Fusion Engitech would consciously like to channel its resources, energy and activities towards building a word that is free of low standards. All our activities & dealing consciously introspect our work and action on day to day basis. </div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src={keyValIcon} alt="" />
                                    <span>Quality Control</span>
                                </div>
                                <div className="p-desc">
                                    Quality control is maintained into every step of Fusion’s construction processes. From material receiving through final outgoing product, quality control is carefully monitored. Our process ensures that our customers get the best quality product and at the lowest price possible.
                                </div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src={keyValIcon} alt="" />
                                    <span>High Return</span>
                                </div>
                                <div className="p-desc">
                                    "A great business at a fair price is superior to a fair business at a great price." We’ve really made the money out of high quality businesses. In some cases, we bought the whole business.
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src={keyValIcon} alt="" />
                                    <span>Customer Satisfaction</span>
                                </div>
                                <div className="p-desc">
                                    Our customers are not our competitors. We compete for them, not with them. We alwasys tries for the best to provide to our customers, the only thing we care about is to match the maximum percentage of customers demand and what we deliver.
                                </div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src={keyValIcon} alt="" />
                                    <span>Professionalism</span>
                                </div>
                                <div className="p-desc">
                                    Professionalism is the conduct, behavior and attitude of someone in a work or business environment. Professionalism leads to workplace success, a strong professional reputation and a high level of work ethic and excellence. We at Fusion maintain the ethics in a proper manner.
                                </div>
                            </div>
                            <div className="col-md-3 p-card">
                                <div className="p-title">
                                    <img src={keyValIcon} alt="" />
                                    <span>Authentic Service</span>
                                </div>
                                <div className="p-desc">
                                    It’s been overhyped, oversold, and underrepresented (in many cases). Some even argue that authenticity is dead. When authenticity is a value, you’ll have a true desire to help the customer and better understand their needs.
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
                                        <span>Management and Team</span>
                                    </div>
                                    <div className="p-desc">
                                        Our team of experts and professional engineers that include architect, designers, civil engineers and other professional engineers & workers who are gaining experience from past many years in the field of civil engineering. In order to provide excellent quality service we do complete planning and designing of project related task that is prepared after completely understanding of the client’s requirement.
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