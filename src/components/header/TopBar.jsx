import React from 'react';

const TopBar = () => {
    return (
        <div className="header-top bg-lighter py-2">
            <div className="top-left pt-md-3">
                <ul>
                    <li>Call Us: <a href="callto:548978478">548978478</a></li>
                    <li>Email us: <a href="mailto:demo@example.com">demo@example.com</a></li>
                    <li>Our address: 45 Dream street Austria</li>
                </ul>
            </div>
            <div className="top-right">
                <div className="office-time">
                    <i className="far fa-clock"></i><span>08:00 am - 06:00 pm</span>
                </div>
                <div className="social-style-one">
                    <a href="http://facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a href="http://twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                </div>
            </div>
        </div>
    )
}

export default TopBar;