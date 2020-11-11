import React from 'react';
import ClientsCard from "./clientCard";

import youthLogo from "../../../assets/logos/youth.jpeg";
import bvgLogo from "../../../assets/logos/bvg.jpeg";
import itdLogo from "../../../assets/logos/itd.jpeg";
import intLogo from "../../../assets/logos/lnt.png";
import tataLogo from "../../../assets/logos/tata.png";
import railwayLogo from "../../../assets/logos/railway.png";

const Clients = () => {

    let clientsData = [
        {
            logo: youthLogo,
            cname: "Youth for Christ",
            location: "Englewood CO 80155 USA",
            website: "https://yfci.org/"
        },
        {
            logo: bvgLogo,
            cname: "BVG - Humanity Ahead",
            location: "Pune-Maharashtra, Ind",
            website: "https://www.bvgindia.com/"
        },
        {
            logo: itdLogo,
            cname: "ITD-Creating Medical Mobility",
            location: "Australia-America-Europe",
            website: "https://www.itd-cart.com/en"
        },
        {
            logo: intLogo,
            cname: "L&T Construction",
            location: "Manapakkam, P.B.No.979, Chennai",
            website: "https://www.lntecc.com/"
        },
        {
            logo: tataLogo,
            cname: "TATA",
            location: "Mumbai, Maharashtra, India",
            website: "https://www.tatamotors.com/"
        },
        {
            logo: railwayLogo,
            cname: "Indian Railways",
            location: "Delhi-India",
            website: "http://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html"
        }
    ];

    return (
        <>
            <div className="clients-main">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">Clints & Partners</div>
                    </div>
                </div>
                <div className="cards-container">
                    <div className="row justify-content-center">
                        {clientsData.map((item) => {
                            return (
                                <ClientsCard
                                    logo={item.logo}
                                    companyName={item.cname}
                                    location={item.location}
                                    website={item.website}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients;