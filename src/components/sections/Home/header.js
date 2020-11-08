import React from 'react';

const Header = () => {
    return (
        <div className="header-main">
                <div className="row">
                    <div className="col-md-12 sub-main">
                        <div className="title">Fusion Engitech</div>
                        <div className="quick-contact">
                            <div className="email">
                                <span><img className="email-logo" src="https://www.warwickshirefitness.com/wp-content/uploads/2019/06/orange-email-icon.png" alt="" /></span>
                                <a href="mailto: amandocx@gmail.com">amandocx@gmail.com</a>
                            </div>
                            <div className="phone">
                                <span><img className="email-logo" src="https://www.midnebraskadisposal.com/assets/templates/midnebraska/images/MetroUI-Other-Phone-icon.png" alt="" /></span>
                                <a href="tel: +917260995387">+91-7260995387</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Header;