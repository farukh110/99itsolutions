import React from 'react';
import gallery1 from '../../../assets/images/gallery/gfs.jpg';
import gallery2 from '../../../assets/images/gallery/Billgenix.jpg';
import gallery3 from '../../../assets/images/gallery/appedology.jpg';
import gallery4 from '../../../assets/images/gallery/greensensebilling.png';

const Gallery = () => {
    return (
        <section className="gallery-section overlay text-white pt-115 rpt-95 pb-100 rpb-80">
            <div className="container-fluid px-0">
                <div className="section-title text-center mb-55">
                    <span className="sub-title">Our Gallery</span>
                    <h2>Some Of Our Work</h2>
                </div>
                <div className="row small-gap">
                    <div className="col-lg-3 col-sm-6">
                        <div className="gallery-item wow fadeInUp delay-0-2s">
                            <img
                                src={gallery1}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <span className="category">
                                    <a href="/portfolio-details"> Web Development </a>
                                </span>
                                <h5>
                                    <a href="/portfolio-details"> Gfs </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="gallery-item wow fadeInUp delay-0-4s">
                            <img
                                src={gallery2}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <span className="category">
                                    <a href="/portfolio-details">Web Development</a>
                                </span>
                                <h5>
                                    <a href="/portfolio-details"> Billgenix </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="gallery-item wow fadeInUp delay-0-6s">
                            <img
                                src={gallery3}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <span className="category">
                                    <a href="/portfolio-details"> Graphic Design </a>
                                </span>
                                <h5>
                                    <a href="/portfolio-details"> Brochure Design </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="gallery-item wow fadeInUp delay-0-8s">
                            <img
                                src={gallery4}
                                alt="Gallery"
                            />
                            <div className="gallery-content">
                                <span className="category">
                                    <a href="/portfolio-details"> Web Development </a>
                                </span>
                                <h5>
                                    <a href="/portfolio-details"> Greensense Billing </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;