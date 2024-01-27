import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ className }) => {
    return (
        <>
            <div className={`restly-header-main-menu ${className || ""}`}>
                <ul className='main-navigation'>
                    <li>
                        <Link to="/">
                            Home
                        </Link>

                    </li>
                    <li>
                        <Link to="/about-us">
                            Who We Are
                        </Link>

                    </li>
                    <li>
                        <Link to='/services'>
                            What We Do  <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">

                            <li>
                                <Link to="/services/web-development">Web Development</Link>
                            </li>

                            <li>
                                <Link to="/services/logo-design">Logo Design</Link>
                            </li>
                            <li>
                                <Link to="/services/branding">Branding</Link>
                            </li>
                            <li>
                                <Link to="/services/app-design-and-development">App Design & Development</Link>
                            </li>
                            <li>
                                <Link to="/services/video-animation">Video Animation</Link>
                            </li>
                            <li>
                                <Link to="/services/content-writing">Content Writing</Link>
                            </li>

                            <li>
                                <Link to="/services/seo">Seo</Link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>


                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;