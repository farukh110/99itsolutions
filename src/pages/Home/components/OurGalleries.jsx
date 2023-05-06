import React, { useRef } from "react";
import SliderCom from "../../../helpers/SliderCom";

import g1 from "../../../assets/images/gallery/gallery-three-1.jpg";
import g3 from "../../../assets/images/gallery/gallery-three-3.jpg";


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
                    <span className="sub-title">Our Gallery</span>
                    <h2>Explore our recent projects</h2>
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
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Our Digital Service</a>
                                </h5>

                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g3}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Domain and Hosting</a>
                                </h5>

                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Logo Design</a>
                                </h5>

                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Web Design</a>
                                </h5>

                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g3}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Development</a>
                                </h5>

                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">E-commerce Integration</a>
                                </h5>
                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Video Animation</a>
                                </h5>
                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Application</a>
                                </h5>
                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Digital Products</a>
                                </h5>
                            </div>
                        </div>
                        <div className="gallery-item style-three">
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <h5>
                                    <a href="/portfolio-details">Content Writing</a>
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