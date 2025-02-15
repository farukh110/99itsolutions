import React from 'react';
import CustomHeading from '../../../../components/heading/CustomHeading';
import './OutSourcingService.scss';

const OutSourcingService = () => {
    return (
        <div className='outsourcing my-lg-5 my-md-4 my-4'>

            <div className='container'>

                <CustomHeading
                    firstWord="Our"
                    lastWord="Approach"
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
                                    <h5>Tailored Solutions</h5>
                                    Customized IT strategies to meet your specific business needs.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Technology-Driven Passion</h5>
                                    Deep technical expertise combined with a commitment to innovation.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Agile & Adaptive</h5>
                                    Quickly adjust to changing project requirements for optimal results.
                                </span>
                            </li>
                            <li>
                                <span className="teamInfoIcon">
                                    <i className="fa fa-angle-double-right" />
                                </span>
                                <span className="it-outsourcing-desc">
                                    <h5>Reliable Support</h5>
                                    Scalable solutions that evolve seamlessly as your business grows.
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
