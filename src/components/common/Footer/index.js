import React from 'react';
import WhiteLogo from "../../../assets/logo-trans-white.png";

const Footer = () => {
    return (
        <>
            <div className="footermain">
                <div className="container sub-main">
                    <div className="row">
                        <div className="col-md-2 logo">
                            <a href="/"><img src={WhiteLogo} alt="" /></a>
                        </div>

                        <div className="d-flex col-md-4">
                            <div className="f-items">
                                <a href="#s" className="item">Blog</a>
                                <a href="#s" className="item">Contact</a>
                                <a href="#s" className="item">About</a>
                                <a href="#s" className="item">Career</a>
                                <a href="#s" className="item">Privacy Policy</a>
                                <a href="#s" className="item">FAQs</a>
                            </div>
                            <div className="ml-5 services d-flex flex-column">
                                <div className="item-title">Services</div>
                                <a href="#s" className="item">Construction</a>
                                <a href="#s" className="item">security</a>
                                <a href="#s" className="item">Housing</a>
                            </div>
                        </div>

                        <div className="col-md-3 services">
                            <div className="item-title">Address</div>
                            <a href="https://goo.gl/maps/P3QFaFC28aTYBqbu7" target="blank" className="item">
                                <div>C-241, 1st floor, Pandav Nagar, Near Mother Dairy, New Delhi - 110092, India</div>
                            </a>
                            <br />
                            <div className="item-title">Contact</div>
                            <a href="mailto: fusionengitech@gmail.com" className="item d-flex align-items-center">
                                <i className="fa fa-envelope mr-2"></i> fusionengitech@gmail.com
                            </a>
                            <a href="tel: +919718881900" className="item d-flex align-items-center">
                                <i className="fa fa-phone mr-2"></i> +91-9718881900
                            </a>
                        </div>

                        <div className="col-md-3 services">
                            <div className="item-title">Follow Us on</div>
                            <div className="item socials">
                                <a href="#s"><i className="fa fa-facebook-f mr-3"></i></a>
                                <a href="#s"><i className="fa fa-twitter mr-3"></i></a>
                                <a href="#s"><i className="fa fa-instagram mr-3"></i></a>
                                <a href="#s"><i className="fa fa-linkedin mr-3"></i></a>
                                <a href="#s"><i className="fa fa-youtube mr-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="text">© 2020 copyrights @ FUSION ENGITECH PVT LTD | Developed by <a className="developer-name" target="blank" href="https://www.linkedin.com/in/aman-raj-46770595/"> Aman </a></div>
                </div>
            </div>
        </>
    )
}

export default Footer;