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
                                <Link to="/services/software-development">Software Development</Link>
                            </li>
                            <li>
                                <Link to="/service-two">Web Development</Link>
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