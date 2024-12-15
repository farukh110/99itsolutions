/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const HomeBanner = () => {

    const navigate = useNavigate();

    return (
        <section className="d-flex align-items-center position-relative vh-90hirepag cover  custom-sft-banner sw-development-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-7  mplp">
                        <h1 className="clor pt-3 pb-2">
                            Leading Custom Software Development Company.
                        </h1>
                        <p className="clor">
                            We are a globally recognized IT software company that was established in 2015. Our services include innovative website designing, website development, graphic designing, as well as Mobile apps, Game, Xreality development. We also specialize in online marketing services, utilizing cutting-edge strategies to boost your online visibility and help convert traffic into sales.
                        </p>
                        <div className="banner-ratings">
                            <div className="ratings-box">
                                <a
                                    href="https://g.co/kgs/nTFb6tA"
                                    target="_blank"
                                    rel="noopener"

                                >
                                    <img
                                        data-lazyloaded={1}
                                        src="https://www.softlabsgroup.com/img/google-rating-svg.webp"
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
                                    href="https://clutch.co/profile/99-it-solutions"
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
                            {/* <div className="ratings-box">
                                <a
                                    href="https://www.goodfirms.co/company/softlabs-group"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <img
                                        data-lazyloaded={1}
                                        src="https://www.softlabsgroup.com/img/goodfirm-rating-svg.webp"
                                        decoding="async"
                                        alt="GoodFirms"
                                        width={135}
                                        height={56}
                                        data-ll-status="loaded"
                                        className="entered litespeed-loaded"
                                    />
                                </a>
                            </div> */}
                        </div>
                        <button
                            type="button"
                            className="btn button getQuoteBtn"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </button>
                    </div>
                    <div className="col-12 col-md-5 d-lg-block d-md-block d-none">
                        <img
                            src="https://www.softlabsgroup.com/img/sw-dev-banner.webp"
                            className="banner-img"
                            alt="Custom Software Development"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeBanner;
