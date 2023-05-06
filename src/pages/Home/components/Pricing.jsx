import React from 'react';

const Pricing = () => {
    return (
        <section className="pricing-section pt-115 rpt-95 pb-90 rpb-70">
            <div className="container">
                <div className="section-title text-center mb-35">
                    <span className="sub-title">Pricing Packages</span>
                    <h2>Choose Your Best Plan</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Standard</h5>
                                <span className="price">29.99</span>
                                <h5 className="pricing-time">Per Month</h5>
                            </div>
                            <ul>
                                <li>Limited install</li>
                                <li>Unlimited Download</li>
                                <li>Free One Year Support</li>
                                <li>Free 15 GB Linux Hosting</li>
                            </ul>
                            <a className="theme-btn btn-circle" href="!#">
                                Choose Plan
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-4s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">BUSINESS</h5>
                                <span className="price">59.99</span>
                                <h5 className="pricing-time">Per Month</h5>
                            </div>
                            <ul>
                                <li>Limited install</li>
                                <li>Unlimited Download</li>
                                <li>Free One Year Support</li>
                                <li>Free 15 GB Linux Hosting</li>
                            </ul>
                            <a className="theme-btn btn-circle" href="!#">
                                Choose Plan
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-6s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">PREMIUM</h5>
                                <span className="price">79.99</span>
                                <h5 className="pricing-time">Per Month</h5>
                            </div>
                            <ul>
                                <li>Limited install</li>
                                <li>Unlimited Download</li>
                                <li>Free One Year Support</li>
                                <li>Free 15 GB Linux Hosting</li>
                            </ul>
                            <a className="theme-btn btn-circle" href="!#">
                                Choose Plan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;