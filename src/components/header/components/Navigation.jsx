import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ className }) => {
    return (
        <>
            <div className={`restly-header-main-menu ${className || ""}`}>
                <ul>
                    <li>
                        <Link to="#">
                            Home
                        </Link>

                    </li>
                    <li>
                        <Link to="#">
                            About <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/about-one">About One</Link>
                            </li>
                            <li>
                                <Link to="/about-two">About Two</Link>
                            </li>
                            <li>
                                <Link to="/about-three">About Three</Link>
                            </li>
                            <li>
                                <Link to="/about-four">About four</Link>
                            </li>
                            <li>
                                <Link to="/about-five">About five</Link>
                            </li>
                            <li>
                                <Link to="/about-six">About Six</Link>
                            </li>
                            <li>
                                <Link to="/about-seven">About Seven</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">
                            Services <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service-one">Service One</Link>
                            </li>
                            <li>
                                <Link to="/service-two">Service Two</Link>
                            </li>
                            <li>
                                <Link to="/service-three">Service Three</Link>
                            </li>
                            <li>
                                <Link to="/service-four">Service Four</Link>
                            </li>
                            <li>
                                <Link to="/service-five">Service five</Link>
                            </li>
                            <li>
                                <Link to="/service-six">Service Six</Link>
                            </li>
                            <li>
                                <Link to="/service-seven">Service Seven</Link>
                            </li>
                            <li>
                                <Link to="/service-details">Service Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">
                            Portfolio <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/portfolio-one">Portfolio One</Link>
                            </li>
                            <li>
                                <Link to="/portfolio-two">Portfolio Two</Link>
                            </li>
                            <li>
                                <Link to="/portfolio-three">Portfolio three</Link>
                            </li>
                            <li>
                                <Link to="/portfolio-four">Portfolio Four</Link>
                            </li>
                            <li>
                                <Link to="/portfolio-details">Portfolio Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">
                            Pages <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/counters">Counters</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/shop-details">Shop details</Link>
                            </li>
                            <li>
                                <Link to="#">Pricing</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/pricing">Pricing One</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing-two">Pricing Two</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing-three">Pricing Three</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing-four">Pricing Four</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing-five">Pricing Five</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing-six">Pricing Six</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Team</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/team-one">Team One</Link>
                                    </li>
                                    <li>
                                        <Link to="/team-two">Team Two</Link>
                                    </li>
                                    <li>
                                        <Link to="/team-three">Team Three</Link>
                                    </li>
                                    <li>
                                        <Link to="/team-four">Team Four</Link>
                                    </li>
                                    <li>
                                        <Link to="/team-single">Team Single</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Testimonial</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/testimonial-one">Testimonial One</Link>
                                    </li>
                                    <li>
                                        <Link to="/testimonial-two">Testimonial Two</Link>
                                    </li>
                                    <li>
                                        <Link to="/testimonial-three">Testimonial Three</Link>
                                    </li>
                                    <li>
                                        <Link to="/testimonial-four">Testimonial Four</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/404">404</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">
                            Blog <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/blog">Blog Page</Link>
                            </li>
                            <li>
                                <Link to="/blog/blog-details">Blog details</Link>
                            </li>
                        </ul>
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