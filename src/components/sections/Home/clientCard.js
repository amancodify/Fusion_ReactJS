import React from 'react';

const ClientCard = ({ logo, companyName, location, website }) => {
    return (
        <div className="client-card-main col-md-3">
            <a className="d-flex flex-column justify-content-center align-items-center" href={website} target="blank">
                <div className="company-logo"><img src={logo} alt="" /></div>
                <div className="company-name">{companyName}</div>
                <div className="location">{location}</div>
            </a>
        </div>
    )
}

export default ClientCard;