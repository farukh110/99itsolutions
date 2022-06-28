import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="main-footer footer-one text-white">
                <div className="footer-widget-area bgs-cover pt-md-5 pb-md-5">
                    <div className="container">
                        <div className="row mt-md-5 mb-md-5">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <div className="footer-logo mb-md-1">
                                        <a href="!index.html"><img className='img-fluid' src={logo} alt="Logo" /></a>
                                    </div>
                                    <div className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6">
                                <div className="footer-widget link-widget ml-3">
                                    <h4 className="footer-title">Page Links</h4>
                                    <ul className="list-style-two">
                                        <li><a href="!#">Home</a></li>
                                        <li><a href="!#">services</a></li>
                                        <li><a href="!#">portfolio</a></li>
                                        <li><a href="!#">blog</a></li>
                                        <li><a href="!#">page</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget contact-widget mr-30 rmr-0">
                                    <h4 className="footer-title">Contacts</h4>
                                    <ul className="list-style-two">
                                        <li><i className="fas fa-map-marker-alt"></i> 1791 Yorkshire Circle Kitty Hawk, NC 27949</li>
                                        <li><i className="fas fa-clock"></i> Mon-Sat 9:00 - 7:00</li>
                                        <li><i className="fas fa-phone-alt"></i> <a href="callto:+012-345-6789">+012-345-6789</a></li>
                                        <li><i className="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer-widget newsletter-widget">
                                    <h4 className="footer-title">Newsletter</h4>
                                    <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing</p>
                                    <form action="">
                                        <input type="email" name="EMAIL" placeholder="Your Email Address" required="" />
                                        <button value="submit"><i className="fa fa-location-arrow"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area bg-blue">
                    <div className="container">
                        <div className="copyright-inner pt-md-3">
                            <div className="social-style-one mb-md-3">
                                <a href="http://facebook.com"><i className="fab fa-facebook-f"></i></a>
                                <a href="http://twitter.com"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                            <p>copyright 2022 Restly All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;