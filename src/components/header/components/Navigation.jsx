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
                                to="/services/app-design-and-development"
                                onClick={() => handleActiveItem('/services/app-design-and-development')}
                                className={activeItem === '/services/app-design-and-development' ? 'actve-menu-top' : ''}
                            >
                                App Design & Development
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

                <li>
                    <div className="menu-btn">
                        <Link to='/outsourcing' className="btn btn-danger btn-get2">Outsourcing</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
