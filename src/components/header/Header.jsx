import React, { useEffect } from 'react';
// import TopBar from './TopBar';
import Navigation from './components/Navigation';
import logo from '../../assets/images/logo.png';
import MobileHeader from './components/mobile/MobileHeader';
import StickyMenu from './components/StickyMenu';
import { Link } from 'react-router-dom';

const Header = () => {

    useEffect(() => {
        StickyMenu(".main-header");
    });

    return (
        <>
            <MobileHeader logo={logo} />
            <header className="main-header header-one">
                <div className="header-top bg-lighter py-10">
                    <div className="top-left">
                        <ul>
                            <li>
                                Call: <a href="callto:03312781741">03312781741</a>
                            </li>
                            <li>
                                Email: <a className='text-lowercase' href="mailto:contact@99itsolutions.com">Contact@99itsolutions.com</a>
                            </li>
                            <li>Our address: Karachi</li>
                        </ul>
                    </div>
                    <div className="top-right">
                        <div className="office-time">
                            <i className="far fa-clock"></i>
                            <span>09:00 am - 06:00 pm</span>
                        </div>
                        <div className="social-style-one">
                            <a href="http://facebook.com">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="http://twitter.com">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.pinterest.com/">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-upper bg-white">
                    <div className="container-fluid clearfix">
                        <div className="header-inner d-flex align-items-center">
                            <div className="logo-outer px-85">
                                <div className="logo">
                                    <Link href="/">
                                        <img className='img-fluid' src={logo} alt="Logo" title="Logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="nav-outer clearfix d-flex align-items-center">
                                <Navigation className="nav-home-one" />
                                <div className="menu-btn">
                                    <Link to="/contact" className="theme-btn">
                                        meet with us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;