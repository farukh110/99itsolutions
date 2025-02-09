/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import googleRating from '../../../../assets/images/home-banner/google-rating-svg.webp';
import clutch from '../../../../assets/images/home-banner/clutch-rating-svg.webp';
import good from '../../../../assets/images/home-banner/goodfirm-rating-svg.webp';
// import sw from '../../../../assets//images/home-banner/sw-dev-banner.webp';
import './index.scss';

const HomeBannerTwo = () => {

    const navigate = useNavigate();

    return (
        <section className="d-flex align-items-center position-relative vh-90hirepag cover  custom-sft-banner sw-development-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-8  mplp">
                        <h1 className="clor pt-3 pb-2">
                            Scalable IT Outsourcing Services Tailored to Your Needs
                        </h1>
                        <p className="clor fw-bold">
                            Adapt to Market Demands Without Compromising on Excellence
                        </p>
                        <button
                            type="button"
                            className="btn button getQuoteBtn"
                            onClick={() => navigate('/contact')}
                        >
                            Let’s work together!
                        </button>

                        <button
                            type="button"
                            className="btn button getQuoteBtn ms-2"
                            onClick={() => navigate('/services')}
                        >
                            Explore Services
                        </button>

                        <div className="banner-ratings mt-md-4">
                            <div className="ratings-box">
                                <a
                                    href="https://g.co/kgs/nTFb6tA"
                                    target="_blank"
                                    rel="noopener"

                                >
                                    <img
                                        data-lazyloaded={1}
                                        src={googleRating}
                                        alt="Google"
                                        width={97}
                                        height={56}
                                        data-ll-status="loaded"
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div>
                            <div className="ratings-box">
                                <a
                                    href={clutch}
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <img
                                        data-lazyloaded={1}
                                        src="https://www.softlabsgroup.com/img/clutch-rating-svg.webp"
                                        alt="Clutch"
                                        width={99}
                                        height={56}
                                        data-ll-status="loaded"
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div>
                            <div className="ratings-box">
                                <a
                                    href="https://www.goodfirms.co/company/99-it-solutions"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <img
                                        data-lazyloaded={1}
                                        src={good}
                                        decoding="async"
                                        alt="GoodFirms"
                                        width={135}
                                        height={56}
                                        data-ll-status="loaded"
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-lg-block d-md-block d-none">
                        {/* <img
                            src={sw}
                            className="banner-img"
                            alt="Custom Software Development"
                        /> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeBannerTwo;
