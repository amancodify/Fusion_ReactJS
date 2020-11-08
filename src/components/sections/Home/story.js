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
                            <div className="desc">Today, FUSION ENGITECH PVT LTD takes on the role of main contractor for to medium size projects and preforms project management service to coordinates specialist trades for industrial commercial projects. We also provide design inputs and engineering solution as  value  add service to our clients. We have achieved excellent exposure in civil engineering services by providing complete client satisfaction. We use latest and high performance machinery & equipment’s in our services in various parts of the country and makes a permanent relationship with our esteemed clients.</div>
                        </div>
                        <div className="col-md-5 right">
                            <img src={missionImg} alt="" />
                        </div>
                    </div>
                    <div className="row justify-content-center what-we-do">
                        <div className="col-md-5 right">
                            <img src={constructionTeamImg} alt="" />
                        </div>
                        <div className="col-md-5 left">
                            <div className="title-text">Who we are?</div>
                            <div className="desc">Established in the year 2015 Delhi India, we ‘’FUSION ENGITECH PVT.LTD.’’ are engaged in providing various kind of Training & Civil construction service that include is now a well-known company providing quality construction within stipulated time frame, thus, gaining a competitive edge in the construction work , Roads & Industrial Roads. These are offered as per the requirement of our esteemed clients. The business is driven by our 2 working director collectively they accumulated more than 4 years of work experience in the civil & trading industry. They are involved in the business development procurement projects management and administration of the company.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory;