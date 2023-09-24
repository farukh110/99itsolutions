import React, { useRef } from "react";
import SliderCom from "../../../helpers/SliderCom";

import erp from "../../../assets/images/products/erp.jpg";
import pos from "../../../assets/images/products/pos-system.jpg";
import school from "../../../assets/images/products/school.jpg";
import lms from "../../../assets/images/products/lms.jpg";
import rms from "../../../assets/images/products/rms.jpg";

import "./OurGalleries.scss";

const OurGalleries = () => {

    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const prevHandler = () => sliderRef.current.slickPrev();
    const nextHandler = () => sliderRef.current.slickNext();

    return (
        <section className="gallery-section-three overlay pt-120 rpt-50 pb-105 rpb-40">
            <div className="container">
                <div className="section-title gellery-section-title mb-55 wow fadeInUp delay-0-2s">
                    <span className="sub-title">Our Products</span>
                    <h2>Explore our recent products</h2>
                    <div className="gallery-carousel-arrow mt-25">
                        <button
                            onClick={prevHandler}
                            type="button"
                            className="gallery-prev slick-arrow"
                        >
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button
                            onClick={nextHandler}
                            type="button"
                            className="gallery-next slick-arrow"
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="gallery-three-wrap wow fadeInRight delay-0-2s">
                    <SliderCom selector={sliderRef} settings={settings}>
                        <div className="gallery-item style-three">
                            <img
                                src={erp}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a target="_blank" rel="noreferrer" href="http://erp-frontend-deployment-deploybucket-15s02qdqzubpd.s3-website.us-east-2.amazonaws.com/orders">Enterprise resource planning</a>
                                </h5>

                            </div>
                        </div>

                        <div className="gallery-item style-three">
                            <img
                                src={pos}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a target="_blank" rel="noreferrer" href="http://pos.revenue.gov.to/">Point of Sales</a>
                                </h5>

                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={school}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a target="_blank" rel="noreferrer" href="http://newalkebulanschools.com/">School Mangement System</a>
                                </h5>

                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={lms}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a target="_blank" rel="noreferrer" href="https://dashboards.khuddamlearningonline.org/site/login">Learning management System</a>
                                </h5>

                            </div>
                        </div>

                        <div className="gallery-item style-three">
                            <img
                                src={rms}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Restaurant management System</a>
                                </h5>

                            </div>
                        </div>

                    </SliderCom>
                </div>
            </div>
        </section>
    )
}

export default OurGalleries;