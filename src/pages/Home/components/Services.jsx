import React from 'react';
import './index.css';

const Services = () => {
    return (
        <>
            <section className="services-section pt-35 rpt-50 pb-md-0 pb-5 rpb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-2 col-md-4 col-sm-5 col-10">
                            <div className="service-box w-100 text-center wow fadeInUp delay-0-2s">
                                <div className="service-normal">
                                    <div className="icon">
                                        <i className="flaticon flaticon-computer"></i>
                                    </div>
                                    <h6>Product Service</h6>

                                </div>
                                <div className="service-hover bg-blue text-white">
                                    {/* <h3>Preparing For Your Business Success With IT Solution</h3> */}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisc</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-5 col-10">
                            <div className="service-box w-100 text-center wow fadeInUp delay-0-4s">
                                <div className="service-normal">
                                    <div className="icon">
                                        <i className="flaticon flaticon-web-development-4"></i>
                                    </div>
                                    <h6>IT Management</h6>

                                </div>
                                <div className="service-hover bg-blue text-white">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisc</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-5 col-10">
                            <div className="service-box w-100 text-center wow fadeInUp delay-0-6s">
                                <div className="service-normal">
                                    <div className="icon">
                                        <i className="flaticon flaticon-web"></i>
                                    </div>
                                    <h6>Cloud Services</h6>

                                </div>
                                <div className="service-hover bg-blue text-white">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisc</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-5 col-10">
                            <div className="service-box w-100 text-center wow fadeInUp delay-0-8s">
                                <div className="service-normal">
                                    <div className="icon">
                                        <i className="flaticon flaticon-data"></i>
                                    </div>
                                    <h6>Machine Learning</h6>

                                </div>
                                <div className="service-hover bg-blue text-white">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisc</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-5 col-10">
                            <div className="service-box w-100 text-center wow fadeInUp delay-0-8s">
                                <div className="service-normal">
                                    <div className="icon">
                                        <i className="flaticon flaticon-data"></i>
                                    </div>
                                    <h6>Machine Learning</h6>

                                </div>
                                <div className="service-hover bg-blue text-white">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisc</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;