import React from 'react';
import brand from "../../../assets/images/services/main-services/brand.jpg";
import hosting from "../../../assets/images/services/main-services/hosting.jpg";
import graphic from "../../../assets/images/services/main-services/graphic.jpg";
import marketing from "../../../assets/images/services/main-services/marketing.jpg";

const Features = () => {
    return (
        <section className="featured-section bgs-cover pt-md-5 rpt-150 pb-120 rpb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="section-title text-center mb-35">
                            <span className="sub-title">Our Core Services</span>
                            <h2>We deal with the aspects of professional IT Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-3 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-2s">
                            <div className="feature-content">
                                <div className="icon">
                                    <img className='img-fluid' src={brand} alt="" />
                                </div>
                                <h5>Lift Bar</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor
                                </p>
                                <a href="service-details" className="learn-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-4s">

                            <div className="feature-content">
                                <div className="icon">
                                    <img className='img-fluid' src={hosting} alt="" />
                                </div>
                                <h5>Lift Bar</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor
                                </p>
                                <a href="/service-details" className="learn-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s">

                            <div className="feature-content">
                                <div className="icon">
                                    <img className='img-fluid' src={graphic} alt="" />
                                </div>
                                <h5>Lift Bar</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor
                                </p>
                                <a href="/service-details" className="learn-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s">

                            <div className="feature-content">
                                <div className="icon">
                                    <img className='img-fluid' src={marketing} alt="" />
                                </div>
                                <h5>Lift Bar</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor
                                </p>
                                <a href="/service-details" className="learn-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="feature-btn text-center mt-20">
                    <a href="/service-one" className="theme-btn">
                        view all services
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Features;;