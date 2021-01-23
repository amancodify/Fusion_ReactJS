import React from "react";
import AboutBanner from "../../../assets/about-banner.jpg";
import Nitish from "../../../assets/nitish.jpg";
import Sumit from "../../../assets/sumit.jpg";


const AboutUs = () => {
    return (
        <>
            <div className="aboutus-main">
                <div className="banner">ABOUT FUSION</div>
                <div className="fusion-desc">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 banner-main">
                                <img src={AboutBanner} className="img-banner" alt="" />
                            </div>
                            <div className="col-md-6 desc-text">
                                ‘’FUSION ENGITECH PVT.LTD.’’ established in the year 2015 Delhi India, we are engaged in providing various kind of Training & Civil construction service that include is now a well-known company providing quality construction within stipulated time frame, thus, gaining a competitive edge in the construction work , Roads & Industrial Roads. <br /> <br /> These are offered as per the requirement of our esteemed clients. Construction began as a general works contractor in 2015. Over the year, it has undertaken many challenging projects and accumulated skills know how and experiences in design and build solution projects management services building trades and related engineering works. “Fusion” is highly quality conscious. Our director themselves look after the work of quality assurance with a sense of responsibility and indulgence. We are one of the renowned quality- oriented organization and quality is our main aim towards which we are dedicated. We use high quality raw material throughout our service in every field.
                                </div>
                        </div>
                    </div>
                </div>
                <div className="our-management">
                    <div className="container">
                        <div className="title-main">MANAGEMENT</div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/36ddd276339625.5c66944c27cd5.gif" className="banner-gif" alt="" />
                            </div>
                            <div className="col-md-6 texts">
                                Our team of experts and professional engineers that include architect, designers, civil engineers and other professional engineers & workers who are gaining experience from past many years in the field of civil engineering. In order to provide excellent quality service we do complete planning and designing of project related task that is prepared after completely understanding of the client’s requirement. Each and every division of our organization is managed and controlled by our team of experts who have wide expertise in their respective domain.
                                    <br /><br />
                                    The management team proactively gather feedback identifies changed in business environment review work processes and communicate key learning points and company policy to all staff at regular meeting.
                                </div>
                        </div>
                    </div>
                </div>
                <div className="our-team">
                    <div className="title-main">FOUNDERS & TEAM</div>
                    <div className="container">
                        <div className="row owners-main">
                            <div className="col-md-4">
                                <div className="owner">
                                    <img src={Nitish} alt="" />
                                    <div className="owner-title">Kumar Madhurendra</div>
                                    <div className="designation">CEO & CO-Founder</div>
                                    <div className="social-main">
                                        <a href="#s"><i className="fa fa-facebook-f mr-3"></i></a>
                                        <a href="#s"><i className="fa fa-instagram mr-3"></i></a>
                                        <a href="#s"><i className="fa fa-linkedin mr-3"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="owner">
                                    <img src={Sumit} alt="" />
                                    <div className="owner-title">Sumit Shrivastav</div>
                                    <div className="designation">CEO & CO-Founder</div>
                                    <div className="social-main">
                                        <a href="#s"><i className="fa fa-facebook-f mr-3"></i></a>
                                        <a href="#s"><i className="fa fa-instagram mr-3"></i></a>
                                        <a href="#s"><i className="fa fa-linkedin mr-3"></i></a>
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

export default AboutUs;