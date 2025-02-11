import React from 'react';
import CustomHeading from '../../../../components/heading/CustomHeading';
import './OutSourcingService.scss';

const OutSourcingService = () => {
    return (
        <div className='outsourcing my-lg-5 my-md-4 my-4'>

            <div className='container'>

                <CustomHeading
                    firstWord="Why Choose us for"
                    lastWord="IT Outsourcing Services?"
                    textCenter="text-center"
                />

                <div className='row'>

                    <div className='col-md-12'>

                        <ul className="why-out-sourcing">
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Two Decades of Expertise</h5>
                                    Over 20+ years in IT outsourcing, 99 IT Solutions brings extensive
                                    experience and best practices to every project.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Customized Solutions</h5>
                                    We specialize in tailored IT solutions, aligning with your unique business
                                    needs for optimal outcomes.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Passion for Tech</h5>
                                    Our passionate team blends technology expertise with a commitment to your
                                    success, driving innovative solutions.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Cost Efficienct</h5>
                                    99 IT Solutions offers cost-effective solutions, reducing expenses while
                                    maximizing ROI.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Agile Development Approach</h5>
                                    Embracing agility, we adapt rapidly to evolving project demands, ensuring
                                    timely results.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Scalable Support</h5>
                                    We provide scalable solutions and continuous support, enabling technology
                                    growth alongside your business.
                                </span>
                            </li>
                        </ul>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default OutSourcingService;
