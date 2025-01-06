import React from 'react';
import logo from '../../assets/images/footer-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Footer = () => {

    const customDate = new Date();

    // console.log('customDate: ', customDate.getFullYear());

    return (
        <>
            <footer className="main-footer footer-one text-white">
                <div className="footer-widget-area bgs-cover pt-md-2 pt-2 pb-md-0">
                    <div className="container">
                        {/* <div className='row'>
                            <div className='col-md-4'>
                                <div className="d-flex align-items-center">
                                    <div className="ft2-icon">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="ft2-content">
                                        <label>600</label>
                                        <span>Likes</span></div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="d-flex align-items-center">
                                    <div className="ft2-icon">
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="ft2-content">
                                        <label>20</label>
                                        <span>Followers</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="d-flex align-items-center">
                                    <div className="ft2-icon">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="ft2-content">
                                        <label>100</label>
                                        <span>Likes</span></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row mt-md-5 mb-md-0">
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
                                    <h4 className="footer-title">Important Links </h4>
                                    <ul className="list-style-two">
                                        <li><Link to='/'> Home </Link></li>
                                        <li><a href="!#">Who We are </a></li>
                                        <li><a href="!#">What we do </a></li>

                                        <li><a href="!#">portfolio</a></li>

                                        <li><Link to='/contact'> Contact Us </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6">
                                <div className="footer-widget link-widget ml-3">
                                    <h4 className="footer-title">Services Links </h4>
                                    <ul className="list-style-two">
                                        <li><Link to='/'> Mobile App Development </Link></li>
                                        <li><a href="!#">Web Development </a></li>
                                        <li><a href="!#">Digital Marketing </a></li>
                                        <li><a href="!#">Graphic Designing</a></li>
                                        <li><Link to='!#'> UI/UX Design </Link></li>
                                        <li><Link to='!#'> Video Animations </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6">
                                <div className="footer-widget link-widget ml-3">
                                    <h4 className="footer-title">Product Solutions </h4>
                                    <ul className="list-style-two">
                                        <li><Link to='/'> ERP </Link></li>
                                        <li><a href="!#">POS </a></li>
                                        <li><a href="!#">Salon Management System </a></li>
                                        <li><a href="!#">Clinic & Hospital Management System</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer-widget contact-widget mr-0 rmr-0">
                                    <h4 className="footer-title">Contacts</h4>
                                    <ul className="list-style-two">
                                        <li><i className="fa-solid fa-phone"></i> <a className='text-lowercase' href="callto:+923312939594">+923312939594</a></li>
                                        <li><i className="fas fa-envelope"></i> <a className='text-lowercase pulse' href="mailto:contact@99itsolutions.com">Contact@99itsolutions.com</a></li>
                                        <li><i className="fa fa-map-marker-alt"></i> <span>Shaheen Arcade, 26 National Stadium Rd, Shanti Nagar Chandni Chowk (New Town), Karachi, Karachi City, Sindh 74800</span></li>

                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget newsletter-widget">
                                    <h4 className="footer-title">LET’S GET STARTED!</h4>
                                    <p>Get in touch today. We’re ready!</p>
                                    <form action="">
                                        <input type="email" name="EMAIL" placeholder="Your Email" required="" />
                                        <button value="submit"><i className="fa fa-location-arrow"></i></button>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="copyright-area bg-blue">
                    <div className="container">
                        <div className="copyright-inner pt-md-3">
                            <div className="social-style-one mb-md-2">
                                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/Ninetynineitsolutions">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://twitter.com/99itsolutions">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/99i.tsolutions">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/99itsolutions">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.pinterest.com/99itsolutions/">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://www.behance.net/99-itsolutions">
                                    <i className="fab fa-behance"></i>
                                </a>
                            </div>
                            <p>Copyright @ 2015-{customDate.getFullYear()} 99 iT Solutions | All Rights Reserved. Powered by 99 iT Solutions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;