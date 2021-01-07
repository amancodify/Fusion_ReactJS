import React from 'react';

const ClientCard = ({ logo, companyName, location, website }) => {
    return (
        <a href={website} target="blank" className="client-card-main col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="company-logo"><img src={logo} alt="" /></div>
                <div className="company-name">{companyName}</div>
                <div className="location">{location}</div>
            </div>
        </a>
    )
}

export default ClientCard;