import React from 'react';
import background from "../../../../assets/images/hero/hero-one.png";

const Hero = () => {
    return (
        <>
            <section
                className="hero-section overlay bgs-cover pt-200 pb-150"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-9">
                            <div className="hero-content text-center text-white">
                                <span className="sub-title d-block wow fadeInUp delay-0-2s">
                                    EMPOWER YOUR BUSINESS
                                </span>
                                <h1 className="wow fadeInUp delay-0-4s mt-20">
                                    Excellent IT services for your success
                                </h1>
                                <div className="hero-btn mt-35 wow fadeInUp delay-0-6s">
                                    <a href="/contact" className="theme-btn">
                                        meet with us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;