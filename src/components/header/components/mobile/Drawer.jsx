import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import '../../../../assets/scss/drawer.scss';

const Drawer = ({ drawer, action }) => {

    const [itemSize, setSize] = useState("0px");
    const [item, setItem] = useState("");
    const handler = (e, value) => {
        // e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            if (item !== value) {
                setSize(`${50 * getItems}px`);
                setItem(value);
            } else {
                setItem("");
            }
        }
    };

    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? "active" : ""}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
                            >
                                <a
                                    href="/"
                                    className="offcanvas-brand text-center mb-40 d-block"
                                >
                                    <img src={logo} alt="" />
                                </a>
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">
                                        <li
                                            onClick={(e) => handler(e, "home")}
                                            id="home"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="!#">Home</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === "home" ? itemSize : "0px",
                                                }}
                                            >
                                                <li>
                                                    <Link to="/">Home 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-two">Home 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-three">Home 3</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-four">Home 4</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-five">Home 5</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-six">Home 6</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-seven">Home 7</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-eight">Home 8</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, "about")}
                                            id="about"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="!#">About</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === "about" ? itemSize : "0px",
                                                }}
                                            >
                                                <li>
                                                    <Link to="/about-one">About 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-two">About 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-three">About 3</Link>
                                                </li>
                                                <li>
                                                    <a href="/about-four">About four</a>
                                                </li>
                                                <li>
                                                    <a href="/about-five">About five</a>
                                                </li>
                                                <li>
                                                    <a href="/about-six">About Six</a>
                                                </li>
                                                <li>
                                                    <a href="/about-seven">About Seven</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, "service")}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="!#">Service</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === "service" ? itemSize : "0px",
                                                }}
                                            >
                                                <li>
                                                    <a href="/service-one">Service One</a>
                                                </li>
                                                <li>
                                                    <a href="/service-two">Service Two</a>
                                                </li>
                                                <li>
                                                    <a href="/service-three">Service Three</a>
                                                </li>
                                                <li>
                                                    <a href="/service-four">Service Four</a>
                                                </li>
                                                <li>
                                                    <a href="/service-five">Service five</a>
                                                </li>
                                                <li>
                                                    <a href="/service-six">Service Six</a>
                                                </li>
                                                <li>
                                                    <a href="/service-seven">Service Seven</a>
                                                </li>
                                                <li>
                                                    <a href="/service-details">Service Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, "portfolio")}
                                            id="portfolio"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="!#">Portfolio</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === "portfolio" ? itemSize : "0px",
                                                }}
                                            >
                                                <li>
                                                    <a href="/portfolio-one">Portfolio One</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-two">Portfolio Two</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-three">Portfolio three</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-four">Portfolio Four</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio-details">Portfolio Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, "Pages")}
                                            id="Pages"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="!#">Pages</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === "Pages" ? itemSize : "0px",
                                                }}
                                            >
                                                <li>
                                                    <a href="/counters">Counters</a>
                                                </li>
                                                <li>
                                                    <a href="/shop">Shop</a>
                                                </li>
                                                <li>
                                                    <a href="/shop-details">Shop details</a>
                                                </li>
                                                <li>
                                                    <a href="/pricing">Pricing One</a>
                                                </li>
                                                <li>
                                                    <a href="/pricing-two">Pricing Two</a>
                                                </li>
                                                <li>
                                                    <a href="/pricing-three">Pricing Three</a>
                                                </li>
                                                <li>
                                                    <a href="/pricing-four">Pricing Four</a>
                                                </li>
                                                <li>
                                                    <a href="/pricing-five">Pricing Five</a>
                                                </li>
                                                <li>
                                                    <a href="/pricing-six">Pricing Six</a>
                                                </li>
                                                <li>
                                                    <a href="/team-one">Team One</a>
                                                </li>
                                                <li>
                                                    <a href="/team-two">Team Two</a>
                                                </li>
                                                <li>
                                                    <a href="/team-three">Team Three</a>
                                                </li>
                                                <li>
                                                    <a href="/team-four">Team Four</a>
                                                </li>
                                                <li>
                                                    <a href="/team-single">Team Single</a>
                                                </li>
                                                <li>
                                                    <a href="/404">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, "Blogs")}
                                            id="Blogs"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="!#">Blog</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === "Blogs" ? itemSize : "0px",
                                                }}
                                            >
                                                <li>
                                                    <Link to="/blog">Blog Page</Link>
                                                </li>
                                                <li>
                                                    <Link to="/blog/blog-details">Blog Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, "contact")}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="!#">
                                                <i className="fa fa-envelope"></i> support@restly.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <i className="fa fa-phone"></i> +(642) 342 762 44
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <i className="fa fa-map-marker-alt"></i> 442 Belle Terre
                                                St Floor 7, San Francisco, AV 4206
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;