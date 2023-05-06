import React from 'react';

const Work = () => {
    return (
        <section className="work-progress-area bgs-cover py-120 rpy-100">
            <div className="container">
                <div className="work-progress-inner bg-blue text-white br-5 py-85 px-75">
                    <div className="section-title-with-btn mb-10">
                        <div className="section-title">
                            <span className="sub-title">How We Do</span>
                            <h2>
                                Custom IT Solutions <br />
                                for Your Business
                            </h2>
                        </div>
                        <a href="/contact" className="theme-btn style-two mt-15">
                            meet with us
                        </a>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-3 col-sm-6">
                            <div className="work-progress-item wow fadeInUp delay-0-2s">
                                <div className="icon">
                                    <i className="flaticon flaticon-speech-bubble"></i>
                                    <span className="progress-step">1</span>
                                </div>
                                <h3>Advertising and Marketing</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="work-progress-item wow fadeInUp delay-0-4s">
                                <div className="icon">
                                    <i className="flaticon flaticon-vector"></i>
                                    <span className="progress-step">2</span>
                                </div>
                                <h3>Web Development</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="work-progress-item wow fadeInUp delay-0-6s">
                                <div className="icon">
                                    <i className="flaticon flaticon-like-1"></i>
                                    <span className="progress-step">3</span>
                                </div>
                                <h3>Mobile App Development</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;