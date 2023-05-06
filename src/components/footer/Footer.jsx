import React from 'react';
import logo from '../../assets/images/footer-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="main-footer footer-one text-white">
                <div className="footer-widget-area bgs-cover pt-md-5 pt-4 pb-md-5">
                    <div className="container">
                        <div className="row mt-md-5 mb-md-5">
                            <div className="col-lg-4 col-md-3 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <div className="footer-logo mt-md-0 mt-2 mb-md-1">
                                        <a href="!index.html"><img className='img-fluid' src={logo} alt="Logo" /></a>
                                    </div>
                                    <div className="text">

                                        We are a globally recognized IT software company that was established in 2015. Our services include innovative website designing, website development, graphic designing, as well as Mobile apps, Game, Xreality  development. We also specialize in online marketing services, utilizing cutting-edge strategies to boost your online visibility and help convert traffic into sales.

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6">
                                <div className="footer-widget link-widget ml-3">
                                    <h4 className="footer-title">Page Links</h4>
                                    <ul className="list-style-two">
                                        <li><Link to='/'> Home </Link></li>
                                        <li><a href="!#">services</a></li>
                                        <li><a href="!#">portfolio</a></li>

                                        <li><Link to='/contact'> Contact Us </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget contact-widget mr-30 rmr-0">
                                    <h4 className="footer-title">Contacts</h4>
                                    <ul className="list-style-two">
                                        <li><i className="fas fa-map-marker-alt"></i> Karachi </li>
                                        <li><i className="fas fa-clock"></i> Mon-Fri 9:00 am - 6:00 pm</li>
                                        <li><i className="fas fa-phone-alt"></i> <a href="callto:03312781741">03312781741</a></li>
                                        <li><i className="fas fa-envelope"></i> <a className='text-lowercase' href="mailto:contact@99itsolutions.com">Contact@99itsolutions.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget newsletter-widget">
                                    <h4 className="footer-title">LET’S GET STARTED!</h4>
                                    <p>Get in touch today. We’re ready!</p>
                                    <form action="">
                                        <input type="email" name="EMAIL" placeholder="Your Email" required="" />
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
                            <p>@copyright 2022 99itsolutions All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;