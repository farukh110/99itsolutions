import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ className }) => {
    // Set the initial active menu item
    const [activeItem, setActiveItem] = useState('/');

    // Function to handle the active menu update
    const handleActiveItem = (item) => {
        setActiveItem(item);
    };

    return (
        <div className={`restly-header-main-menu ${className || ""}`}>
            <ul className='main-navigation'>
                <li>
                    <Link
                        to="/"
                        onClick={() => handleActiveItem('/')}
                        className={activeItem === '/' ? 'actve-menu-top' : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about-us"
                        onClick={() => handleActiveItem('/about-us')}
                        className={activeItem === '/about-us' ? 'actve-menu-top' : ''}
                    >
                        Who We Are
                    </Link>
                </li>
                <li>
                    <Link
                        to='/services'
                        onClick={() => handleActiveItem('/services')}
                        className={activeItem.startsWith('/services') ? 'actve-menu-top' : ''}
                    >
                        What We Do <i className="fa fa-angle-down" />
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link
                                to="/services/web-development"
                                onClick={() => handleActiveItem('/services/web-development')}
                                className={activeItem === '/services/web-development' ? 'actve-menu-top' : ''}
                            >
                                Web Development
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/logo-design"
                                onClick={() => handleActiveItem('/services/logo-design')}
                                className={activeItem === '/services/logo-design' ? 'actve-menu-top' : ''}
                            >
                                Logo Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/branding"
                                onClick={() => handleActiveItem('/services/branding')}
                                className={activeItem === '/services/branding' ? 'actve-menu-top' : ''}
                            >
                                Branding
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/app-design-and-development"
                                onClick={() => handleActiveItem('/services/app-design-and-development')}
                                className={activeItem === '/services/app-design-and-development' ? 'actve-menu-top' : ''}
                            >
                                App Design & Development
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/video-animation"
                                onClick={() => handleActiveItem('/services/video-animation')}
                                className={activeItem === '/services/video-animation' ? 'actve-menu-top' : ''}
                            >
                                Video Animation
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/content-writing"
                                onClick={() => handleActiveItem('/services/content-writing')}
                                className={activeItem === '/services/content-writing' ? 'actve-menu-top' : ''}
                            >
                                Content Writing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services/seo"
                                onClick={() => handleActiveItem('/services/seo')}
                                className={activeItem === '/services/seo' ? 'actve-menu-top' : ''}
                            >
                                Seo
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        to="/portfolio"
                        onClick={() => handleActiveItem('/portfolio')}
                        className={activeItem === '/portfolio' ? 'actve-menu-top' : ''}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        onClick={() => handleActiveItem('/contact')}
                        className={activeItem === '/contact' ? 'actve-menu-top' : ''}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
