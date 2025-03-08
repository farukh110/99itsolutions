import React from 'react';
import './WhoWeAre.scss';

import CustomHeading from '../../../../components/heading/CustomHeading';

const WhoWeAre = () => {
    return (
        <div className='container who-we-are-about mt-md-5 mt-sm-5 mb-md-5 mb-sm-5'>

            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <CustomHeading
                        firstWord="Who"
                        lastWord="We Are?"
                        textCenter="text-left"
                    />
                    <div className="commpany-intro">
                        <p className="sub-txt">
                            99 IT Solutions is a leading technology innovator with over 10 years of industry expertise, delivering cutting-edge digital solutions and software outsourcing services to SMEs worldwide. We specialize in web and software development, product development, WhatsApp Business API and chatbot integrations, DevOps, solutions architecture, IT outsourcing, and consulting. With a strong presence in the USA, Canada, New Zealand, Australia, the UK, Sweden, and the UAE, we provide scalable, next-generation technology solutions tailored to meet diverse business needs.
                            <br />
                            Our additional services include AI/ML development, XR, game development, and remote staffing, all designed to ensure measurable success and sustainable growth. At 99 IT Solutions, we stay ahead of industry trends, leveraging the latest technologies to drive innovation, efficiency, and exceptional customer experiences.

                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 desk-countsec d-lg-block d-md-block">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 desk-mt">
                            <div className="countBox countBox1 mt-md-5" style={{ background: "#F9AD2F" }}>
                                <div
                                    className="d-flex align-items-center position-relative"
                                >
                                    <div
                                        className="counting mt-md-4"
                                        style={{ color: "#162E55" }}
                                    >
                                        10
                                    </div>
                                    <div>
                                        <i className="fa fa-plus" />
                                    </div>
                                </div>
                                <h5 className="position-relative mt-md-4">
                                    Years
                                </h5>
                                <p className="position-relative">
                                    Industry leaders for over one decade
                                </p>
                            </div>
                            <div className="countBox" style={{ background: "#F9AD2F" }}>
                                <div
                                    className="d-flex align-items-center position-relative"
                                >
                                    <div className="counting mt-md-4">
                                        50
                                    </div>
                                    <div>
                                        <i className="fa fa-plus" />
                                    </div>
                                </div>
                                <h5 className="position-relative mt-md-4">
                                    Clients
                                </h5>
                                <p className="position-relative">
                                    Global client base with 90% retention rate
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="countBox">
                                <div
                                    className="d-flex align-items-center position-relative "
                                >
                                    <div className="counting mt-md-4" style={{ color: '#F9AD2F' }}>
                                        20
                                    </div>
                                    <div>
                                        <i className="fa fa-plus" />
                                    </div>
                                </div>
                                <h5 className="position-relative mt-md-4">
                                    Skilled Experts
                                </h5>
                                <p className="position-relative">
                                    Diverse industry experience across sectors
                                </p>
                            </div>
                            <div className="countBox">
                                <div
                                    className="d-flex align-items-center position-relative "
                                >
                                    <div className="counting mt-md-4" style={{ color: '#F9AD2F' }}>
                                        100
                                    </div>
                                    <div>
                                        <i className="fa fa-plus" />
                                    </div>
                                </div>
                                <h5 className="position-relative mt-md-4">
                                    Projects
                                </h5>
                                <p className="position-relative">
                                    Delivered tech projects using next-gen tech
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WhoWeAre;
