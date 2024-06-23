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

                                        <li className="menu-item-has-children">
                                            <Link to="/">Home</Link>
                                        </li>

                                        <li className="menu-item-has-children">

                                            <Link to="/about-us">Who We Are</Link>

                                        </li>
                                        <li
                                            onClick={(e) => handler(e, "service")}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="/services">What We Do </Link>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === "service" ? itemSize : "0px",
                                                }}
                                            >
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
                                        <li className="menu-item-has-children active">
                                            <Link to="/portfolio">Portfolio</Link>

                                        </li>

                                        <li className="menu-item-has-children active">
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="!#">
                                                <i className="fa fa-envelope"></i> contact@99itsolutions.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+92 331 293-9594">
                                                <i className="fa fa-phone"></i> +92 331 293-9594
                                            </a>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa fa-map-marker-alt"></i> Shaheen Arcade, 26 National Stadium Rd, Shanti Nagar Chandni Chowk (New Town), Karachi, Karachi City, Sindh 74800
                                            </span>
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