import React from 'react';
import CounterUp from "../../../helpers/CounterUp";
import "./Counters.scss";

const Counters = () => {
    return (
        <section
            id="cournter-section-three"
            className="cournter-section-three bg-lighter text-center pt-65 rpt-50 pb-60 rpb-30"
        >
            <div className="container">
                <div className="section-title mb-55">
                    <h2>
                        Over 100+ finished work and <br />
                        Still counting.
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="success-item circle-style wow fadeInUp delay-0-2s">
                            <span className="count-text plus" data-speed="5000" data-stop="35">
                                <CounterUp
                                    endValue="100"
                                    sectionSelect="cournter-section-three"
                                />
                            </span>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="success-item circle-style wow fadeInUp delay-0-4s color-two">
                            <span className="count-text plus" data-speed="5000" data-stop="34">
                                <CounterUp
                                    endValue="50"
                                    sectionSelect="cournter-section-three"
                                />
                            </span>
                            <span>Happy Clients</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="success-item circle-style wow fadeInUp delay-0-6s color-three">
                            <span
                                className="count-text plus"
                                data-speed="5000"
                                data-stop="119"
                            >
                                <CounterUp
                                    endValue="20"
                                    sectionSelect="cournter-section-three"
                                />
                            </span>
                            <span>Skilled Experts</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="success-item circle-style wow fadeInUp delay-0-8s color-four">
                            <span
                                className="count-text plus"
                                data-speed="5000"
                                data-stop="119"
                            >
                                <CounterUp
                                    endValue="10"
                                    sectionSelect="cournter-section-three"
                                />
                            </span>
                            <span>Experienced</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counters;