import React, { useEffect } from 'react';
// import TopBar from './TopBar';
import Navigation from './components/Navigation';
import logo from '../../assets/images/logo.png';
import MobileHeader from './components/mobile/MobileHeader';
import StickyMenu from './components/StickyMenu';
import { Link } from 'react-router-dom';
import './Header.scss';

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
                            {/* <li>
                                <Link to='/contact' className="btn btn-danger btn-get btn_wiggle">Request a Quote</Link>
                            </li> */}
                            <li>
                                <span className='bold-text'> Email us on: </span> <a className='text-lowercase' href="mailto:contact@99itsolutions.com">Contact@99itsolutions.com</a>
                            </li>
                            <li>
                                <span className='bold-text'> Give us a call: </span> <a href="callto:+92 331 293-9594">+92 331 293-9594</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-right">

                        <div className="social-style-one">
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
                    </div>
                </div>
                <div className="header-upper bg-white">
                    <div className="container-fluid clearfix">
                        <div className="header-inner d-flex align-items-center">
                            <div className="logo-outer px-85">
                                <div className="logo">
                                    <Link to="/">
                                        <img className='img-fluid' src={logo} alt="Logo" title="Logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="nav-outer clearfix d-flex align-items-center">
                                <Navigation className="nav-home-one" />
                                <div className="menu-btn">
                                    <Link to='/get-free-quote' className="btn btn-danger btn-get btn_wiggle">Request a Quote / Demo</Link>
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