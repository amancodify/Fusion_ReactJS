import React from "react";
import ContactBanner from "../../../assets/contact-banner.png";

const ContactUs = () => {
    return (
        <>
            <div className="contactus-main">
                <div className="c-header-main d-flex">
                    <div className="col-md-5 texts-main">
                        <div className="main-title">
                            Contact Us and Get In Touch
                        </div>
                        <div className="sub-title">Ask us anything and we'll help you find the answers. Response time: within 24 hours</div>
                    </div>
                    <div className="col-md-7 banner-main">
                        <img className="banner" src={ContactBanner} alt="" />
                    </div>
                </div>
                <div className="contact-details-main">
                    <div className="main-title">Reach out to us</div>
                    <div className="container">
                        <div className="sub-title">Customer Support Details</div>
                        <div className="sub-title2">Ask us anything and we'll help you find the answers. Response time: within 24 hours</div>
                        <div className="row c-block-main">
                            <div className="col-md-4 c-block">
                                <div className="detail-title">Registered <br />Address</div>
                                <div className="bar-line"></div>
                                <div className="details">
                                    Fusion Engitech Private Limited<br />
                                    C-241 1st floor Pandav Nagar, <br />New Delhi-110092, Delhi, India. Nearest Metro - Akshardham / Nirman Vihar
                                </div>
                            </div>
                            <div className="col-md-4 c-block">
                                <div className="detail-title">Contact <br />Details</div>
                                <div className="bar-line"></div>
                                <div className="details d-flex flex-column">

                                    <div className="d-flex mb-3">
                                        <div className="icon-phone mr-3"><i className="fa fa-phone" aria-hidden="true"></i></div>
                                        <div className="numbers">
                                            <div className="title">Call Us</div>
                                            <div className="data"> +91-9718881900/7091910183</div>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <div className="icon-email mr-3"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                        <div className="email">
                                            <div className="title">Email Us</div>
                                            <div className="data"> fusionengitech@gmail.com </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 c-block">
                                <div className="details">
                                    <iframe
                                        title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56039.56092605095!2d77.24876323309029!3d28.61559590050914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5400000001%3A0xb7ee9dfab7ffe080!2sFUSION%20ENGITECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sus!4v1611411831907!5m2!1sen!2sus"
                                        width="320"
                                        height="300"
                                        frameBorder="0"
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;