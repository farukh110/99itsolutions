import React from 'react';
import g1 from "../../../assets/images/gallery/pak.jpg";
import g2 from "../../../assets/images/gallery/hm.jpg";
import g3 from "../../../assets/images/gallery/sme.jpg";
import g4 from "../../../assets/images/gallery/Bdom.jpg";
import g5 from "../../../assets/images/gallery/ei.jpg";
import g6 from "../../../assets/images/gallery/tlc.jpg";
import g7 from "../../../assets/images/gallery/ready.jpg";
import g8 from "../../../assets/images/gallery/nar.jpg";

const OurWork = () => {
    return (
        <section className="gallery-section px-55 rpx-0 rpt-30 pb-85 rpb-20">
            <div className="container-fluid">
                <div className="section-title text-center mb-55">
                    <span className="sub-title">Our Gallery</span>
                    <h2>Some Of Our Work</h2>
                </div>
                <div className="row text-white justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-2s animated"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-4s animated"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g2}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-6s animated"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g3}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-8s animated"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g5}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-2s"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g6}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-4s"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g4}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-6s"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g7}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div
                            className="gallery-item style-four wow fadeInUp delay-0-8s"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <img
                                src={g8}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <div className="gallery-content-inner">
                                    <span className="category">Our Gallery</span>
                                    <h5>Laptop in the office</h5>
                                    <a href="/portfolio-details">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork;